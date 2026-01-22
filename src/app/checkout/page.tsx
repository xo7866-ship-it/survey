'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { createOrder } from './actions';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import styles from './page.module.css';

export default function CheckoutPage() {
    const { items, cartCount, clearCart } = useCart();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Address Search
    const open = useDaumPostcodePopup();

    const handleComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        // Set values to inputs
        // Using IDs or names to populate
        (document.querySelector('input[name="zipcode"]') as HTMLInputElement).value = data.zonecode;
        (document.querySelector('input[name="address1"]') as HTMLInputElement).value = fullAddress;
        (document.querySelector('input[name="city"]') as HTMLInputElement).value = data.sido + ' ' + data.sigungu; // Optional helper
        (document.querySelector('input[name="address2"]') as HTMLInputElement)?.focus();
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 50000 ? 0 : 3000;
    const total = subtotal + shipping;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const customerName = `${formData.get('firstName')} ${formData.get('lastName')}`.trim();
        const phone = formData.get('phone') as string;

        // Construct full address from inputs
        // Inputs order: Name, Name, Address, City/State, Zipcode
        // We can get them by index if they don't have names, but better to use FormData if we add names to all inputs.
        // Since I didn't add names to address inputs yet, I'll rely on querySelector for those specific fields or just use what I have.
        // Actually, let's just grab them by selector relative to form to be safe, or assume standard order.
        // Better: Let's give names to address inputs in a separate edit or just use the existing selectors which I removed in previous step? 
        // No, I only added names to First/Last Name. 
        // Let's rely on adding names to address inputs in a separate step or just use DOM traversal?
        // I will add names to address inputs in the same file now if possible, OR just use indexing.
        // Let's use indexing from the form elements for now as a quick fix, but adding 'name' attributes is cleaner.
        // I'll grab values from form elements by index since I know the structure.
        // actually, let's just update the inputs to have names in next steps. For now, I'll use the inputs I can find.

        // Construct full address from inputs using FormData
        const address = `${formData.get('address1')} ${formData.get('address2') || ''}, ${formData.get('city')} (${formData.get('zipcode')})`.trim();

        // Simulate network delay for UX
        setTimeout(async () => {
            try {
                const result = await createOrder({
                    items: items.map(i => ({ title: i.title, quantity: i.quantity })),
                    total: total,
                    customerName: customerName || '비회원',
                    phone: phone,
                    address: address
                });

                if (result.success) {
                    setIsSubmitting(false);
                    // In a real app, clear cart here
                    if (clearCart) clearCart();
                    alert(`주문이 완료되었습니다! (주문번호: ${result.orderId})`);
                    router.push('/');
                }
            } catch (error) {
                console.error('Order failed', error);
                setIsSubmitting(false);
                alert('주문 처리에 실패했습니다.');
            }
        }, 1000);
    };

    if (cartCount === 0) {
        return (
            <div className={`container ${styles.container}`} style={{ textAlign: 'center' }}>
                <h1>주문/결제</h1>
                <p>장바구니가 비어있습니다.</p>
            </div>
        );
    }

    return (
        <div className={`container ${styles.container}`}>
            <h1 className={styles.title}>주문/결제</h1>

            <form onSubmit={handleSubmit} className={styles.grid}>
                <div className={styles.formSection}>
                    <h2 className={styles.sectionTitle}>배송 정보</h2>

                    <div className={styles.row}>
                        <div className={styles.formGroup} style={{ flex: 1 }}>
                            <label className={styles.label}>이름</label>
                            <input type="text" name="firstName" required className={styles.input} />
                        </div>
                        <div className={styles.formGroup} style={{ flex: 1 }}>
                            <label className={styles.label}>성</label>
                            <input type="text" name="lastName" required className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.formGroup} style={{ flex: 1 }}>
                            <label className={styles.label}>우편번호</label>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <input type="text" name="zipcode" required className={styles.input} readOnly />
                                <button type="button" onClick={handleClick} style={{
                                    padding: '0 1rem',
                                    backgroundColor: '#4a5568',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    whiteSpace: 'nowrap'
                                }}>
                                    우편번호 찾기
                                </button>
                            </div>
                        </div>
                        <div className={styles.formGroup} style={{ flex: 1 }}>
                            <label className={styles.label}>시/도 (자동입력)</label>
                            <input type="text" name="city" className={styles.input} readOnly tabIndex={-1} style={{ backgroundColor: '#f7fafc' }} />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>기본 주소</label>
                        <input type="text" name="address1" required className={styles.input} readOnly placeholder="주소 검색을 이용해주세요" style={{ backgroundColor: '#f7fafc' }} />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>상세 주소</label>
                        <input type="text" name="address2" className={styles.input} placeholder="동, 호수, 상세 위치 등" />
                    </div>

                    <div className={styles.row}>
                        <div className={styles.formGroup} style={{ flex: 1 }}>
                            <label className={styles.label}>연락처</label>
                            <input type="tel" name="phone" required className={styles.input} />
                        </div>
                        <div className={styles.formGroup} style={{ flex: 1 }}>
                            {/* Spacer */}
                        </div>
                    </div>

                    <h2 className={styles.sectionTitle} style={{ marginTop: '2rem' }}>결제 정보</h2>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>카드 번호 (테스트용)</label>
                        <input type="text" placeholder="0000 0000 0000 0000" className={styles.input} />
                    </div>
                    <div className={styles.row}>
                        <div className={styles.formGroup} style={{ flex: 1 }}>
                            <label className={styles.label}>유효기간</label>
                            <input type="text" placeholder="MM/YY" className={styles.input} />
                        </div>
                        <div className={styles.formGroup} style={{ flex: 1 }}>
                            <label className={styles.label}>CVC</label>
                            <input type="text" placeholder="123" className={styles.input} />
                        </div>
                    </div>

                    <div className={styles.formGroup} style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                            <input type="checkbox" id="privacy" name="privacy" required style={{ marginTop: '4px' }} />
                            <label htmlFor="privacy" style={{ fontSize: '0.9rem', lineHeight: '1.5', color: '#4a5568' }}>
                                <strong>[필수] 개인정보 수집 및 이용 동의</strong><br />
                                주문 처리 및 배송을 위해 이름, 연락처, 주소를 수집 및 이용합니다.
                                수집된 정보는 배송 완료 후 5년 간 보관 후 파기됩니다.
                            </label>
                        </div>
                    </div>
                </div>

                <div className={styles.summarySection}>
                    <div className={styles.orderSummary}>
                        <h3 className={styles.sectionTitle} style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>주문 내역</h3>
                        {items.map(item => (
                            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                <span>{item.title} x {item.quantity}</span>
                                <span>{(item.price * item.quantity).toLocaleString()}원</span>
                            </div>
                        ))}

                        <div className={styles.summaryRow} style={{ marginTop: '1rem', borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
                            <span>소계</span>
                            <span>{subtotal.toLocaleString()}원</span>
                        </div>
                        <div className={styles.summaryRow}>
                            <span>배송비</span>
                            <span>{shipping.toLocaleString()}원</span>
                        </div>
                        <div className={styles.totalRow}>
                            <span>총 결제금액</span>
                            <span>{total.toLocaleString()}원</span>
                        </div>
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                        {isSubmitting ? '처리 중...' : `${total.toLocaleString()}원 결제하기`}
                    </button>
                </div>
            </form>
        </div>
    );
}

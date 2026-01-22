'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from '@/app/cart/page.module.css'; // Reusing existing styles for now, but path might need adjustment if it's not global

export default function CartContent() {
    // Logic from original CartPage
    const { items, removeFromCart } = useCart();

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 50000 ? 0 : 3000;
    const total = subtotal + shipping;

    if (items.length === 0) {
        return (
            <div className={`container ${styles.container}`}>
                <h1 className={styles.title}>장바구니</h1>
                <div className={styles.emptyState}>
                    <p style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>장바구니가 비어있습니다.</p>
                    <Link href="/books" className="btn btn-primary">
                        도서 둘러보기
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={`container ${styles.container}`}>
            <h1 className={styles.title}>장바구니</h1>

            <div className={styles.grid}>
                <div className={styles.itemsList}>
                    {items.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.itemImage}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                            <div className={styles.itemInfo}>
                                <Link href={`/books/${item.id}`} className={styles.itemTitle}>
                                    {item.title}
                                </Link>
                                <div className={styles.itemPrice}>{item.price.toLocaleString()}원</div>
                            </div>

                            <div className={styles.itemActions}>
                                <span className={styles.quantity}>수량: {item.quantity}</span>
                                <span style={{ fontWeight: 600 }}>{(item.price * item.quantity).toLocaleString()}원</span>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className={styles.removeBtn}
                                >
                                    삭제
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.summary}>
                    <h2 className={styles.summaryTitle}>주문 요약</h2>

                    <div className={styles.summaryRow}>
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

                    <Link
                        href="/checkout"
                        className={styles.checkoutBtn}
                        style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
                    >
                        주문하기
                    </Link>
                </div>
            </div>
        </div>
    );
}

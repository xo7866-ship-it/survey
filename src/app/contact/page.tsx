import { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: '문의하기 | 지혜서원',
    description: '문의사항이 있으시면 언제든 연락주세요.',
};

export default function ContactPage() {
    return (
        <div className={`container ${styles.container}`}>
            <h1 className={styles.title}>문의하기</h1>

            <div className={styles.grid}>
                {/* Contact Info */}
                <div className={styles.infoSection}>
                    <h2 className={styles.sectionTitle}>연락처 정보</h2>

                    <div className={styles.contactItem}>
                        <div className={styles.iconWrapper}><MapPin /></div>
                        <div>
                            <h3 className={styles.itemTitle}>매장 위치</h3>
                            <p className={styles.itemText}>서울특별시 종로구 책방로 123<br />지혜서원 본점</p>
                        </div>
                    </div>

                    <div className={styles.contactItem}>
                        <div className={styles.iconWrapper}><Phone /></div>
                        <div>
                            <h3 className={styles.itemTitle}>전화 문의</h3>
                            <p className={styles.itemText}>02-1234-5678</p>
                        </div>
                    </div>

                    <div className={styles.contactItem}>
                        <div className={styles.iconWrapper}><Mail /></div>
                        <div>
                            <h3 className={styles.itemTitle}>이메일 문의</h3>
                            <p className={styles.itemText}>hello@wisdombook.example.com</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

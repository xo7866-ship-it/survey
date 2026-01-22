import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.column}>
                    <h3>지혜서원</h3>
                    <p>
                        종이수목원을 꿈꾸는 특별한 서점.<br />
                        당신의 마음에 숲을 선물합니다.
                    </p>
                </div>
                <div className={styles.column}>
                    <h3>탐색</h3>
                    <ul className={styles.links}>
                        <li><Link href="/">홈</Link></li>
                        <li><Link href="/books">전체 도서</Link></li>
                        <li><Link href="/about">지혜서원 소개</Link></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>고객지원</h3>
                    <ul className={styles.links}>
                        <li><Link href="/contact">문의하기</Link></li>
                        <li><Link href="/shipping">배송 안내</Link></li>
                        <li><Link href="/returns">반품/교환</Link></li>
                        <li><Link href="/faq">자주 묻는 질문</Link></li>
                    </ul>
                </div>
            </div>
            <div className={`container ${styles.bottom}`}>
                <p>&copy; 2026 wisdombook. All rights reserved.</p>
            </div>
        </footer>
    );
}

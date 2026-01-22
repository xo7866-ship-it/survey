'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Menu, X } from 'lucide-react';
import CartStatus from './CartStatus';
import SearchBox from './SearchBox';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.logo}>
                    지혜서원
                </Link>

                {/* Desktop Nav */}
                <nav className={`${styles.nav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}>
                    <ul className={styles.navLinks}>
                        <li><Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>홈</Link></li>
                        <li><Link href="/books" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>도서 목록</Link></li>
                        <li><Link href="/about" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>소개</Link></li>
                        <li><Link href="/contact" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>문의하기</Link></li>
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <SearchBox />

                    <CartStatus />

                    {/* Auth links placeholder for static export */}
                    <Link href="/login" className={styles.iconBtn} aria-label="로그인">
                        <User size={20} />
                    </Link>

                    <button
                        className={`${styles.iconBtn} ${styles.menuBtn}`}
                        aria-label="메뉴"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ zIndex: 101 }}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>
        </header>
    );
}

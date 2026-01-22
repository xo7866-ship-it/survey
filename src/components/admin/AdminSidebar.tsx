'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, ShoppingBag, Home, LogOut, FileText } from 'lucide-react';

import styles from './AdminSidebar.module.css';

const MENU_ITEMS = [
    { name: '대시보드', href: '/admin', icon: LayoutDashboard },
    { name: '도서 관리', href: '/admin/books', icon: BookOpen },
    { name: '주문 관리', href: '/admin/orders', icon: ShoppingBag },
    { name: '페이지 관리', href: '/admin/pages', icon: FileText },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.header}>
                <h1 className={styles.title}>관리자</h1>
            </div>

            <nav className={styles.nav}>
                {MENU_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.link} ${isActive ? styles.active : ''}`}
                        >
                            <Icon size={20} />
                            <span>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className={styles.footer}>
                <Link href="/" className={styles.footerLink}>
                    <Home size={18} /> 쇼핑몰로 이동
                </Link>
                <Link href="/" className={styles.footerLink}>
                    <LogOut size={18} /> 로그아웃
                </Link>
            </div>
        </aside>
    );
}

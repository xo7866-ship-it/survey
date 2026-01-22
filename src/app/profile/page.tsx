'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

// Mock Order Data
const MOCK_ORDERS = [
    {
        id: 'ORD-20240520-001',
        date: '2024.05.20',
        items: [
            { title: '잊혀진 계절 1', quantity: 1 },
            { title: '흔적', quantity: 1 }
        ],
        total: 28000,
        status: '배송완료'
    },
    {
        id: 'ORD-20240615-002',
        date: '2024.06.15',
        items: [
            { title: '알고 싶은 우리 아이 마음', quantity: 1 }
        ],
        total: 15000,
        status: '배송중'
    }
];

export default function ProfilePage() {
    // Static export: Mock session
    const router = useRouter();

    // Mock session for static demo
    const session = {
        user: {
            name: "홍길동",
            email: "user@example.com",
            image: "https://placehold.co/100x100?text=User"
        }
    };

    return (
        <div className={`container ${styles.container}`}>
            <h1 className={styles.pageTitle}>마이페이지</h1>

            <div className={styles.grid}>
                {/* User Info Card */}
                <div className={styles.card}>
                    <div className={styles.profileHeader}>
                        <img
                            src={session.user.image || `https://placehold.co/100x100?text=${session.user.name?.[0] || 'U'}`}
                            alt="Profile"
                            className={styles.avatar}
                        />
                        <div>
                            <h2 className={styles.userName}>{session.user.name}</h2>
                            <p className={styles.userEmail}>{session.user.email}</p>
                        </div>
                    </div>
                </div>

                {/* Order History */}
                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>주문 내역</h3>
                    <div className={styles.orderList}>
                        {MOCK_ORDERS.map(order => (
                            <div key={order.id} className={styles.orderCard}>
                                <div className={styles.orderHeader}>
                                    <span className={styles.orderDate}>{order.date}</span>
                                    <span className={`${styles.status} ${order.status === '배송완료' ? styles.statusDone : styles.statusActive}`}>
                                        {order.status}
                                    </span>
                                </div>
                                <div className={styles.orderItems}>
                                    {order.items.map((item, idx) => (
                                        <div key={idx} className={styles.item}>
                                            <span className={styles.itemTitle}>{item.title}</span>
                                            <span className={styles.itemQty}>{item.quantity}권</span>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.orderFooter}>
                                    <span className={styles.orderId}>주문번호: {order.id}</span>
                                    <span className={styles.orderTotal}>{order.total.toLocaleString()}원</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

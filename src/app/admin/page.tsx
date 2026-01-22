'use client';

import { getDashboardStats, getRecentOrders } from './actions';
import { ShoppingBag, BookOpen, Users, Banknote } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './dashboard.module.css';

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalBooks: 0,
        totalOrders: 0,
        totalUsers: 5,   // Still mock as we don't have a user DB
        revenue: 0
    });
    const [recentOrders, setRecentOrders] = useState<any[]>([]);

    useEffect(() => {
        // Load data from Server Actions
        const loadData = async () => {
            const statsData = await getDashboardStats();
            setStats(statsData);

            const ordersData = await getRecentOrders();
            setRecentOrders(ordersData);
        };
        loadData();
    }, []);

    const cards = [
        { title: '총 도서 수', value: `${stats.totalBooks}권`, icon: BookOpen, color: '#4299e1' },
        { title: '총 주문', value: `${stats.totalOrders}건`, icon: ShoppingBag, color: '#48bb78' },
        { title: '총 회원', value: `${stats.totalUsers}명`, icon: Users, color: '#ed8936' },
        { title: '총 매출', value: `${stats.revenue.toLocaleString()}원`, icon: Banknote, color: '#9f7aea' },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case '배송완료': return '#38a169'; // Green
            case '배송중': return '#3182ce';   // Blue
            case '주문접수': return '#d69e2e'; // Yellow
            default: return '#718096';         // Gray
        }
    };

    return (
        <div>
            <h1 className={styles.pageTitle}>대시보드</h1>
            <div className={styles.grid}>
                {cards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardIcon} style={{ backgroundColor: `${card.color}20`, color: card.color }}>
                                <Icon size={24} />
                            </div>
                            <div className={styles.cardContent}>
                                <p className={styles.cardTitle}>{card.title}</p>
                                <p className={styles.cardValue}>{card.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className={styles.recentSection}>
                <h2 className={styles.sectionTitle}>최근 주문 내역</h2>
                <div className={styles.tableCard}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>주문번호</th>
                                <th>고객명</th>
                                <th>주문상품</th>
                                <th>상태</th>
                                <th>금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentOrders.map(order => (
                                <tr key={order.id}>
                                    <td style={{ fontSize: '0.9rem', color: '#718096' }}>{order.id}</td>
                                    <td style={{ fontWeight: 600 }}>{order.customer}</td>
                                    <td>
                                        {order.items.length > 0 && (
                                            <span style={{ fontSize: '0.9rem' }}>
                                                {order.items[0].title}
                                                {order.items.length > 1 && <span style={{ color: '#a0aec0' }}> 외 {order.items.length - 1}건</span>}
                                            </span>
                                        )}
                                    </td>
                                    <td>
                                        <span
                                            style={{
                                                backgroundColor: `${getStatusColor(order.status)}20`,
                                                color: getStatusColor(order.status),
                                                padding: '4px 8px',
                                                borderRadius: '4px',
                                                fontSize: '0.8rem',
                                                fontWeight: 600
                                            }}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td style={{ fontWeight: 600 }}>{order.total.toLocaleString()}원</td>
                                </tr>
                            ))}
                            {recentOrders.length === 0 && (
                                <tr>
                                    <td colSpan={5} style={{ textAlign: 'center', padding: '2rem', color: '#a0aec0' }}>
                                        접수된 주문이 없습니다.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

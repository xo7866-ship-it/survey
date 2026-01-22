'use client';

import { getAllOrders, deleteOrderAction, updateOrderStatusAction } from '@/app/admin/actions';
import { Order, OrderStatus } from '@/lib/orderService';
import { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import styles from '../dashboard.module.css';

export default function OrderListPage() {
    const [orders, setOrders] = useState<Order[]>([]);

    const fetchOrders = async () => {
        const data = await getAllOrders();
        setOrders(data);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const handleStatusChange = async (id: string, newStatus: string) => {
        await updateOrderStatusAction(id, newStatus as OrderStatus);
        fetchOrders(); // Refresh
    };

    const handleDelete = async (id: string) => {
        if (confirm('정말 이 주문을 삭제하시겠습니까?')) {
            await deleteOrderAction(id);
            fetchOrders(); // Refresh
        }
    };

    const getStatusColor = (status: OrderStatus) => {
        switch (status) {
            case '배송완료': return '#38a169'; // Green
            case '배송중': return '#3182ce';   // Blue
            case '주문접수': return '#d69e2e'; // Yellow
            default: return '#718096';         // Gray
        }
    };

    return (
        <div>
            <h1 className={styles.pageTitle}>주문 관리</h1>

            <div className={styles.tableCard}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>주문번호</th>
                            <th>일자</th>
                            <th>고객명</th>
                            <th>주문상품</th>
                            <th>금액</th>
                            <th>상태</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td style={{ fontSize: '0.9rem', color: '#718096' }}>{order.id}</td>
                                <td>{order.date}</td>
                                <td style={{ fontWeight: 600 }}>
                                    {order.customer}
                                    <details style={{ marginTop: '4px', fontSize: '0.8rem', fontWeight: 'normal', color: '#666', cursor: 'pointer' }}>
                                        <summary>배송/연락처</summary>
                                        <div style={{ padding: '8px', background: '#f7fafc', borderRadius: '4px', marginTop: '4px', textAlign: 'left' }}>
                                            <div style={{ marginBottom: '2px' }}>📞 {order.phone || '-'}</div>
                                            <div>🏠 {order.address || '-'}</div>
                                            <div style={{ marginTop: '4px', fontSize: '0.75rem', color: '#718096' }}>
                                                개인정보동의: {order.privacyAgreed ? '✅' : '❌'}
                                            </div>
                                        </div>
                                    </details>
                                </td>
                                <td>
                                    {order.items.map((item, idx) => (
                                        <div key={idx} style={{ fontSize: '0.9rem' }}>
                                            {item.title} <span style={{ color: '#a0aec0' }}>x{item.quantity}</span>
                                        </div>
                                    ))}
                                </td>
                                <td style={{ fontWeight: 600 }}>{order.total.toLocaleString()}원</td>
                                <td>
                                    <select
                                        value={order.status}
                                        onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                        style={{
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            border: `1px solid ${getStatusColor(order.status)}`,
                                            color: getStatusColor(order.status),
                                            fontWeight: 600,
                                            fontSize: '0.85rem',
                                            backgroundColor: 'white',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <option value="주문접수">주문접수</option>
                                        <option value="결제완료">결제완료</option>
                                        <option value="배송준비">배송준비</option>
                                        <option value="배송중">배송중</option>
                                        <option value="배송완료">배송완료</option>
                                    </select>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(order.id)}
                                        style={{
                                            color: '#e53e3e',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            padding: '4px'
                                        }}
                                        aria-label="주문 삭제"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

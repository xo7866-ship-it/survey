// 'use server'; // Static export: Server actions disabled

import { orderService } from '@/lib/orderService';


export async function createOrder(data: {
    items: { title: string; quantity: number }[],
    total: number,
    customerName: string,
    phone: string,
    address: string
}) {
    // Ideally we get user from session to ensure security, but for now we accept passed name
    // or fallback to session name.
    // Ideally we get user from session to ensure security, but for now we accept passed name
    // or fallback to session name.
    // Static export: Remove server session check
    const customer = data.customerName || '비회원';

    const newOrder = {
        id: `ORD-${new Date().toISOString().slice(2, 10).replace(/-/g, '')}-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
        customer: customer,
        phone: data.phone,
        address: data.address,
        privacyAgreed: true,
        date: new Date().toLocaleDateString('ko-KR'),
        items: data.items,
        total: data.total,
        status: '주문접수' as const
    };

    orderService.add(newOrder);

    return { success: true, orderId: newOrder.id };
}

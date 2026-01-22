// 'use server'; // Static export: Server actions disabled

import { bookService } from '@/lib/bookService';
import { orderService, OrderStatus } from '@/lib/orderService';

export async function getDashboardStats() {
    const books = bookService.getAll();
    const orders = orderService.getAll();

    // Revenue is sum of all order totals
    // Note: This matches the login in previous client component, but moves it to server
    const revenue = orders.reduce((sum, order) => sum + order.total, 0);

    return {
        totalBooks: books.length,
        totalOrders: orders.length,
        totalUsers: 5, // Mock number
        revenue: revenue
    };
}

export async function getRecentOrders() {
    const orders = orderService.getAll();
    // Return top 5 recent
    return orders.slice(0, 5);
}

export async function getAllOrders() {
    return orderService.getAll();
}

export async function deleteOrderAction(id: string) {
    orderService.delete(id);
    return { success: true };
}

export async function updateOrderStatusAction(id: string, status: OrderStatus) {
    orderService.updateStatus(id, status);
    return { success: true };
}

// Page Management Actions
import { pageService } from '@/lib/pageService';

export async function getPageContent(id: string) {
    return pageService.getById(id);
}

export async function updatePageContent(id: string, content: string) {
    pageService.update(id, content);
    return { success: true };
}

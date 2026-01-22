export type OrderStatus = '주문접수' | '결제완료' | '배송준비' | '배송중' | '배송완료';

export interface Order {
    id: string;
    customer: string;
    phone?: string;
    address?: string;
    privacyAgreed?: boolean;
    date: string;
    items: { title: string; quantity: number }[];
    total: number;
    status: OrderStatus;
}

const initialOrders: Order[] = [
    // Mock data cleared as requested
];

let ordersData = [...initialOrders];

export const orderService = {
    getAll: () => ordersData,

    add: (order: Order) => {
        ordersData = [order, ...ordersData];
        return order;
    },

    updateStatus: (id: string, status: OrderStatus) => {
        ordersData = ordersData.map(o => o.id === id ? { ...o, status } : o);
        return ordersData.find(o => o.id === id);
    },

    delete: (id: string) => {
        ordersData = ordersData.filter(o => o.id !== id);
    }
};

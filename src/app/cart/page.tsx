import CartContent from '@/components/CartContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '장바구니 | 지혜서원',
    description: '장바구니에 담긴 도서를 확인하고 주문하세요.',
};

export default function CartPage() {
    return <CartContent />;
}

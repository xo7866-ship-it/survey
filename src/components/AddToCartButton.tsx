'use client';

import { useRouter } from 'next/navigation';
import { ShoppingBag, CreditCard } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './AddToCartButton.module.css';

interface AddToCartButtonProps {
    id: string;
    title: string;
    price: number;
    image?: string;
    variant?: 'full' | 'icon';
    showBuyNow?: boolean;
}

export default function AddToCartButton({ id, title, price, image, variant = 'full', showBuyNow = false }: AddToCartButtonProps) {
    const { addToCart } = useCart();
    const router = useRouter();

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart({ id, title, price, image: image || '' });
    };

    const handleBuyNow = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart({ id, title, price, image: image || '' });
        router.push('/checkout');
    };

    if (variant === 'icon') {
        return (
            <button
                className={styles.cartBtn}
                aria-label="Add to Cart"
                onClick={handleAddToCart}
            >
                <ShoppingBag size={18} />
            </button>
        );
    }

    return (
        <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
            <button className={styles.addToCart} onClick={handleAddToCart} style={{ flex: 1 }}>
                <ShoppingBag size={20} />
                장바구니 담기
            </button>
            {showBuyNow && (
                <button
                    className={styles.addToCart}
                    onClick={handleBuyNow}
                    style={{
                        flex: 1,
                        backgroundColor: '#2d3748', // Darker grey for contrast
                        color: 'white'
                    }}
                >
                    <CreditCard size={20} />
                    구매하기
                </button>
            )}
        </div>
    );
}

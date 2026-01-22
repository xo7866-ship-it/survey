import Link from 'next/link';
import AddToCartButton from './AddToCartButton';
import styles from './BookCard.module.css';

interface BookCardProps {
    id: string;
    title: string;
    author: string;
    price: number;
    image?: string;
}

export default function BookCard({ id, title, author, price, image }: BookCardProps) {
    const isSpecialBook = ['forgotten-season-1', 'forgotten-season-2', 'traces'].includes(id);

    return (
        <div className={styles.card}>
            <Link href={`/books/${id}`} className={styles.imageWrapper}>
                <img
                    src={image || `https://placehold.co/400x600/f5f5f5/333333?text=${encodeURIComponent(title)}`}
                    alt={title}
                    className={`${styles.image} ${isSpecialBook ? styles.containedImage : ''}`}
                    loading="lazy"
                />
            </Link>
            <div className={styles.content}>
                <h3 className={styles.title}>
                    <Link href={`/books/${id}`}>{title}</Link>
                </h3>
                <p className={styles.author}>{author}</p>
                <div className={styles.footer}>
                    <span className={styles.price}>{price.toLocaleString()}원</span>
                    <AddToCartButton id={id} title={title} price={price} image={image} variant="icon" />
                </div>
            </div>
        </div>
    );
}

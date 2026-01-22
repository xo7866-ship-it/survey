import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, Heart } from 'lucide-react';
import { getBookById, BOOKS } from '@/lib/data';

export async function generateStaticParams() {
    return BOOKS.map((book) => ({
        id: book.id,
    }));
}
import AddToCartButton from '@/components/AddToCartButton';
import styles from './page.module.css';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const book = getBookById(id);

    if (!book) {
        return {
            title: 'Book Not Found',
        };
    }

    return {
        title: `${book.title} | 지혜서원`,
        description: `지혜서원에서 ${book.author}의 ${book.title}을 만나보세요.`,
    };
}

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const book = getBookById(id);

    if (!book) {
        notFound();
    }

    return (
        <div className={`container ${styles.container}`}>
            <nav className={styles.breadcrumb}>
                <Link href="/">홈</Link> &gt; <Link href="/books">도서 목록</Link> &gt; <span>{book.title}</span>
            </nav>

            <div className={styles.grid}>
                <div className={styles.imageSection}>
                    <img
                        src={book.image || `https://placehold.co/400x600/f5f5f5/333333?text=${encodeURIComponent(book.title)}`}
                        alt={book.title}
                        style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}
                    />
                </div>

                <div className={styles.infoSection}>
                    <h1 className={styles.title}>{book.title}</h1>
                    <p className={styles.author}>저자: {book.author}</p>

                    <div className={styles.priceRating}>
                        <span className={styles.price}>{book.price.toLocaleString()}원</span>
                        <div className={styles.rating}>
                            <Star fill="currentColor" size={20} />
                            <span>{book.rating}</span>
                            <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>({book.reviews}개의 리뷰)</span>
                        </div>
                    </div>

                    <p className={styles.description}>{book.description}</p>

                    <div className={styles.actions}>
                        <AddToCartButton id={book.id} title={book.title} price={book.price} image={book.image} showBuyNow={true} />
                        <button className={styles.wishlist} aria-label="찜하기">
                            <Heart size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

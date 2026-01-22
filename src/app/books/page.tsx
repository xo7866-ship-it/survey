import { Metadata } from 'next';
import BooksList from '@/components/BooksList';

export const metadata: Metadata = {
    title: '전체 도서 | 지혜서원',
    description: '지혜서원이 엄선한 모든 책을 만나보세요.',
};

export default function BooksPage() {
    return (
        <div className="container" style={{ padding: '4rem 20px' }}>
            <BooksList />
        </div>
    );
}

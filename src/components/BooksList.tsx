'use client';

import { useSearchParams } from 'next/navigation';
import { BOOKS } from '@/lib/data';
import BookCard from '@/components/BookCard';
import { Suspense } from 'react';

function BooksListContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q')?.toLowerCase() || '';

    const filteredBooks = BOOKS.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );

    return (
        <>
            <h1 style={{
                fontSize: '2.5rem',
                marginBottom: '2rem',
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-primary)'
            }}>
                {query ? `"${query}" 검색 결과` : '전체 도서'}
            </h1>

            {filteredBooks.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
                    <p style={{ fontSize: '1.2rem' }}>검색 결과가 없습니다.</p>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {filteredBooks.map((book) => (
                        <BookCard key={book.id} {...book} />
                    ))}
                </div>
            )}
        </>
    );
}

export default function BooksList() {
    return (
        <Suspense fallback={<div>도서 목록을 불러오는 중...</div>}>
            <BooksListContent />
        </Suspense>
    );
}

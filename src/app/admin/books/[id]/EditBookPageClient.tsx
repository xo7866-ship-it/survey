'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Book } from '@/lib/data';
import BookForm from '@/components/admin/BookForm';
import { bookService } from '@/lib/bookService';
import styles from '../../dashboard.module.css';

export default function EditBookPageClient() {
    const params = useParams();
    const id = params?.id as string;
    const [book, setBook] = useState<Book | undefined>(undefined);
    const router = useRouter();

    useEffect(() => {
        if (id) {
            const foundBook = bookService.getById(id);
            if (foundBook) {
                setBook(foundBook);
            } else {
                alert('존재하지 않는 도서입니다.');
                router.push('/admin/books');
            }
        }
    }, [id, router]);

    if (!book) return <div>로딩중...</div>;

    return (
        <div>
            <h1 className={styles.pageTitle}>도서 수정</h1>
            <BookForm initialData={book} />
        </div>
    );
}

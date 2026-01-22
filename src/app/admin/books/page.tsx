'use client';

import { bookService } from '@/lib/bookService';
import { Book } from '@/lib/data';
import Link from 'next/link';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from '../dashboard.module.css'; // Reuse dashboard styles

export default function BookListPage() {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        setBooks(bookService.getAll());
    }, []);

    const handleDelete = (id: string) => {
        if (confirm('정말 삭제하시겠습니까?')) {
            bookService.delete(id);
            setBooks(bookService.getAll()); // Refresh list
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1 className={styles.pageTitle}>도서 관리</h1>
                <Link
                    href="/admin/books/new"
                    style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontWeight: 600,
                        fontSize: '0.9rem'
                    }}
                >
                    <Plus size={18} /> 도서 등록
                </Link>
            </div>

            <div className={styles.tableCard}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th style={{ width: '80px' }}>이미지</th>
                            <th>도서명</th>
                            <th>저자</th>
                            <th>가격</th>
                            <th>관리</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book => (
                            <tr key={book.id}>
                                <td>
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        style={{ width: '50px', height: '70px', objectFit: 'cover', borderRadius: '4px' }}
                                    />
                                </td>
                                <td style={{ fontWeight: 500 }}>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.price.toLocaleString()}원</td>
                                <td>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        <Link
                                            href={`/admin/books/${book.id}`}
                                            style={{ color: '#4299e1', padding: '4px' }}
                                            aria-label="수정"
                                        >
                                            <Edit size={18} />
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(book.id)}
                                            style={{ color: '#e53e3e', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
                                            aria-label="삭제"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

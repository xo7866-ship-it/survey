'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { bookService } from '@/lib/bookService';
import { Book } from '@/lib/data';
import styles from './BookForm.module.css';

interface BookFormProps {
    initialData?: Book; // If provided, it's edit mode
}

export default function BookForm({ initialData }: BookFormProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        price: '',
        category: '소설',
        description: '',
        image: '',
        publisher: '',
        publishedDate: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                title: initialData.title,
                author: initialData.author,
                price: initialData.price.toString(),
                category: initialData.category,
                description: initialData.description,
                image: initialData.image,
                publisher: initialData.publisher || '',
                publishedDate: initialData.publishedDate || ''
            });
        }
    }, [initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const bookData = {
            ...formData,
            price: Number(formData.price),
            rating: 0,
            reviews: 0
        };

        if (initialData) {
            // Update
            bookService.update(initialData.id, bookData);
            alert('도서 정보가 수정되었습니다.');
        } else {
            // Create
            bookService.add(bookData);
            alert('새로운 도서가 등록되었습니다.');
        }

        router.push('/admin/books');
        router.refresh();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="title">도서명</label>
                <input
                    type="text" id="title" name="title"
                    value={formData.title} onChange={handleChange} required
                />
            </div>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="author">저자</label>
                    <input
                        type="text" id="author" name="author"
                        value={formData.author} onChange={handleChange} required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="price">가격</label>
                    <input
                        type="number" id="price" name="price"
                        value={formData.price} onChange={handleChange} required
                    />
                </div>
            </div>

            <div className={styles.row}>
                <div className={styles.formGroup}>
                    <label htmlFor="category">카테고리</label>
                    <select id="category" name="category" value={formData.category} onChange={handleChange}>
                        <option value="소설">소설</option>
                        <option value="에세이">에세이</option>
                        <option value="인문">인문</option>
                        <option value="경영/경제">경영/경제</option>
                        <option value="자기계발">자기계발</option>
                        <option value="어린이">어린이</option>
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="publisher">출판사</label>
                    <input
                        type="text" id="publisher" name="publisher"
                        value={formData.publisher} onChange={handleChange}
                    />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="image">이미지 URL</label>
                <input
                    type="text" id="image" name="image"
                    value={formData.image} onChange={handleChange} required
                    placeholder="https://example.com/image.jpg"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="description">책 소개</label>
                <textarea
                    id="description" name="description"
                    value={formData.description} onChange={handleChange} required
                    rows={5}
                />
            </div>

            <div className={styles.actions}>
                <button type="button" onClick={() => router.back()} className={styles.cancelBtn}>취소</button>
                <button type="submit" className={styles.submitBtn}>
                    {initialData ? '수정 저장' : '도서 등록'}
                </button>
            </div>
        </form>
    );
}

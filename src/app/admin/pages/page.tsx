'use client';

import { useState, useEffect } from 'react';
import { getPageContent, updatePageContent } from '../actions';
import styles from './page.module.css';

export default function PageManagement() {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        loadContent();
    }, []);

    const loadContent = async () => {
        const page = await getPageContent('about');
        if (page) {
            setContent(page.content);
            setTitle(page.title);
        }
        setIsLoading(false);
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await updatePageContent('about', content);
            alert('저장되었습니다.');
        } catch (error) {
            alert('저장에 실패했습니다.');
        }
        setIsSaving(false);
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>페이지 관리 - {title}</h1>
            <div className={styles.editorContainer}>
                <label className={styles.label}>페이지 내용 (HTML)</label>
                <p className={styles.helpText}>HTML 태그를 직접 입력하여 내용을 수정할 수 있습니다.</p>
                <textarea
                    className={styles.editor}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className={styles.actions}>
                <button
                    className={styles.saveBtn}
                    onClick={handleSave}
                    disabled={isSaving}
                >
                    {isSaving ? '저장 중...' : '저장하기'}
                </button>
            </div>
        </div>
    );
}

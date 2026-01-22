'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import styles from './Header.module.css'; // Reusing header styles for icon consistency

export default function SearchBox() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/books?q=${encodeURIComponent(query)}`);
            setIsOpen(false);
            setQuery('');
        }
    };

    return (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            {isOpen ? (
                <form
                    onSubmit={handleSearch}
                    style={{
                        position: 'absolute',
                        right: 0,
                        background: 'white',
                        padding: '5px',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-md)',
                        display: 'flex',
                        alignItems: 'center',
                        zIndex: 20,
                        border: '1px solid #eee'
                    }}
                >
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="검색어를 입력하세요..."
                        autoFocus
                        style={{
                            border: 'none',
                            outline: 'none',
                            padding: '5px 10px',
                            fontSize: '0.9rem',
                            width: '150px'
                        }}
                    />
                    <button type="submit" style={{ display: 'none' }}>Search</button>
                </form>
            ) : null}

            <button
                className={styles.iconBtn}
                aria-label="Search"
                onClick={() => setIsOpen(!isOpen)}
                style={{ zIndex: 21 }}
            >
                <Search size={20} />
            </button>
            {isOpen && (
                <div
                    style={{ position: 'fixed', inset: 0, zIndex: 10 }}
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
}

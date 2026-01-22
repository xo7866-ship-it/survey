import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`${styles.decoration} ${styles.decorationTop}`} aria-hidden="true" />

            <div className={`container ${styles.inner}`}>
                <div className={styles.content}>
                    <span className={styles.label}>Est. 2024</span>
                    <h1 className={styles.title}>
                        마음의 숲, <br />
                        <span style={{ color: 'var(--color-secondary)' }}>지혜서원</span>
                    </h1>
                    <p className={styles.description}>
                        한 권의 책이 당신의 마음에서 자라<br />
                        다시 무성한 숲이 되기를 꿈꿉니다.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'inherit' }}>
                        <Link href="/books" className="btn btn-primary">
                            베스트셀러
                            <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                        <Link href="/about" className="btn btn-outline">
                            지혜서원에 대하여
                        </Link>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    {/* Placeholder for a hero image or 3D book arrangement */}
                    <div style={{
                        width: '100%',
                        maxWidth: '400px',
                        aspectRatio: '3/4',
                        backgroundColor: '#e0e0e0',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-lg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#888',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <img
                            src="/brand_image.jpg"
                            alt="지혜서원 브랜드 이미지"
                            style={{
                                position: 'relative',
                                zIndex: 2,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                opacity: 1
                            }}
                        />
                        {/* Decorative gradient overlay */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(45deg, rgba(26,26,46,0.05), rgba(201,165,92,0.1))'
                        }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

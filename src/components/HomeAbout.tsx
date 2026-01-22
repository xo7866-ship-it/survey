import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './HomeAbout.module.css';

export default function HomeAbout() {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.imageWrapper}>
                    {/* Placeholder for about image - using a subtle pattern/gradient for now */}
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: 'rgba(0,0,0,0.05)', fontFamily: 'var(--font-heading)' }}>
                        Jihye Seowon
                    </div>
                </div>
                <div className={styles.content}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>책, 그 이상의 가치</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                        우리는 책이 삶을 변화시키는 힘을 믿습니다. 지혜서원은 단순한 서점을 넘어,
                        독자와 저자가 만나고 지혜가 싹트는 마음의 숲이 되고자 합니다.
                    </p>
                    <ul style={{ marginBottom: '2rem', listStyle: 'none' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <span style={{ width: '8px', height: '8px', background: 'var(--color-secondary)', borderRadius: '50%' }}></span>
                            엄선된 큐레이션
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <span style={{ width: '8px', height: '8px', background: 'var(--color-secondary)', borderRadius: '50%' }}></span>
                            독자와의 깊은 소통
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ width: '8px', height: '8px', background: 'var(--color-secondary)', borderRadius: '50%' }}></span>
                            저자의 진심을 담은 이야기
                        </li>
                    </ul>
                    <Link href="/about" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        지혜서원 이야기 더보기 <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}

import Link from 'next/link';
import { pageService } from '@/lib/pageService';
import styles from './page.module.css';

export const metadata = {
    title: '지혜서원 이야기 | 지혜서원',
    description: '종이수목원을 꿈꾸는 지혜서원의 이야기.',
};

export default function AboutPage() {
    const pageContent = pageService.getById('about');

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>지혜서원 이야기</h1>

            <div className={styles.content}>
                {/* Dynamic Content */}
                <div
                    dangerouslySetInnerHTML={{ __html: pageContent?.content || '' }}
                    className={styles.dynamicContent}
                />

                <div className={styles.valuesSection}>
                    <h2 className={styles.valuesTitle}>지혜서원의 가치</h2>
                    <ul className={styles.valuesList}>
                        <li style={{ marginBottom: '0.5rem' }}><strong>치유와 위로:</strong> 절망 속에서 희망을 찾는 이야기들을 전합니다.</li>
                        <li style={{ marginBottom: '0.5rem' }}><strong>성장과 공유:</strong> 삶의 경험과 지혜를 나누며 함께 성장합니다.</li>
                        <li><strong>진정성:</strong> 저자의 진심이 담긴 책만을 엄선합니다.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

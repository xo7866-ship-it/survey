import styles from './Reviews.module.css';

const REVIEWS = [
    {
        id: 1,
        author: '최지훈',
        role: '독자',
        content: '잊혀진 계절을 읽고 며칠 동안 여운이 가시지 않았습니다. 진실을 향한 저자의 용기에 깊은 감동을 받았습니다.',
        rating: 5
    },
    {
        id: 2,
        author: '박수진',
        role: '독자',
        content: '흔적은 정말 충격적이면서도 꼭 읽어야 할 책입니다. 메이플님의 용기 있는 고백에 응원을 보냅니다.',
        rating: 5
    },
    {
        id: 3,
        author: '김민수',
        role: '학부모',
        content: '알고 싶은 우리 아이 마음을 통해 아이와의 대화가 달라졌어요. 정말 추천합니다!',
        rating: 4.5
    }
];

export default function Reviews() {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className={styles.title}>독자의 목소리</h2>
                    <p className={styles.subtitle}>지혜서원과 함께한 독자들의 이야기</p>
                </div>

                <div className={styles.grid}>
                    {REVIEWS.map(review => (
                        <div key={review.id} className={styles.card}>
                            <div className={styles.stars}>
                                {'★'.repeat(Math.floor(review.rating))}
                                {review.rating % 1 !== 0 && '☆'}
                            </div>
                            <p className={styles.content}>"{review.content}"</p>
                            <div className={styles.author}>
                                <strong>{review.author}</strong>
                                <span>{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

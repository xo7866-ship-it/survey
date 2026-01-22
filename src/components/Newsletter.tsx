'use client';

import styles from './Newsletter.module.css';

export default function Newsletter() {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.inner}`}>
                <h2 className={styles.title}>지혜서원 뉴스레터 구독</h2>
                <p className={styles.text}>
                    매주 새로운 책 추천, 저자 인터뷰, 그리고 특별한 할인 소식을 가장 먼저 받아보세요.
                </p>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="이메일 주소를 입력해주세요"
                        className={styles.input}
                        required
                    />
                    <button type="submit" className={styles.button}>
                        구독하기
                    </button>
                </form>
            </div>
        </section>
    );
}

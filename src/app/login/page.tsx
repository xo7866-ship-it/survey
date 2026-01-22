'use client';


import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGoogleSignIn = async () => {
        setIsLoading(true);
        // Mock Google Sign In for static export
        setTimeout(() => {
            alert("정적 페이지 데모에서는 Google 로그인을 지원하지 않습니다.");
            setIsLoading(false);
        }, 500);
    };

    const handleCredentialsSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };

        const email = target.email.value;
        const password = target.password.value;

        // Mock credential validation using NextAuth - REMOVED for static export
        // Simple mock login
        setTimeout(() => {
            if (email === "user@example.com" && password === "password") {
                router.push('/');
            } else if (email === "admin@example.com" && password === "admin123") {
                router.push('/');
            } else {
                setError('이메일 또는 비밀번호가 올바르지 않습니다. (Test: user@example.com / password)');
                setIsLoading(false);
            }
        }, 1000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>로그인</h1>
                    <p className={styles.subtitle}>지혜서원에 오신 것을 환영합니다.</p>
                </div>

                {error && <div className={styles.error}>{error}</div>}

                <div className={styles.googleSection}>
                    <button
                        onClick={handleGoogleSignIn}
                        className={styles.googleBtn}
                        disabled={isLoading}
                    >
                        <svg className={styles.googleIcon} viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                            <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.734 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.489 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.989 -25.464 56.619 L -21.484 53.529 Z" />
                                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                            </g>
                        </svg>
                        Google 계정으로 로그인
                    </button>
                    {/* .env note removed */}
                </div>

                <div className={styles.divider}>
                    <span>또는 이메일로 로그인</span>
                </div>

                <form onSubmit={handleCredentialsSignIn} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="이메일을 입력하세요"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="비밀번호를 입력하세요"
                            required
                        />
                    </div>

                    <button type="submit" className={styles.submitBtn} disabled={isLoading}>
                        {isLoading ? '로그인 중...' : '로그인'}
                    </button>
                </form>

                <div className={styles.footer}>
                    <p>계정이 없으신가요? <Link href="/register">회원가입</Link></p>
                </div>
            </div>
        </div>
    );
}

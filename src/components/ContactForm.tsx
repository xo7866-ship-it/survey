'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate submission
        setTimeout(() => {
            setStatus('success');
        }, 1000);
    };

    return (
        <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
            {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '2rem 0', color: 'green' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>메시지가 전송되었습니다!</h3>
                    <p>문의해 주셔서 감사합니다. 곧 답변 드리겠습니다.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        style={{ marginTop: '1rem', textDecoration: 'underline', border: 'none', background: 'none', cursor: 'pointer' }}
                    >
                        추가 문의하기
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>이름</label>
                        <input type="text" required style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid #ddd' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>이메일</label>
                        <input type="email" required style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid #ddd' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>메시지</label>
                        <textarea required rows={5} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid #ddd', fontFamily: 'inherit' }}></textarea>
                    </div>
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn btn-primary"
                        style={{ width: '100%', opacity: status === 'submitting' ? 0.7 : 1 }}
                    >
                        {status === 'submitting' ? '전송 중...' : '메시지 보내기'}
                    </button>
                </form>
            )}
        </div>
    );
}

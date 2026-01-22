'use client';


import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    // Static export: Remove auth hook
    const router = useRouter();

    // Mock admin session
    const session = {
        user: { name: '관리자', email: 'admin@example.com', role: 'admin' }
    };
    const status = 'authenticated';

    useEffect(() => {
        console.log('Admin Access: Static Mode');
    }, [router]);


    if (!session?.user) return null;

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f7fafc' }}>
            <AdminSidebar />
            <main style={{ flex: 1, marginLeft: '250px', padding: '2rem' }}>
                {children}
            </main>
        </div>
    );
}

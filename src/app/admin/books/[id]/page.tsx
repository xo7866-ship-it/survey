import { BOOKS } from '@/lib/data';
import EditBookPageClient from './EditBookPageClient';

export async function generateStaticParams() {
    return BOOKS.map((book) => ({
        id: book.id,
    }));
}

export default function EditBookPage() {
    return <EditBookPageClient />;
}

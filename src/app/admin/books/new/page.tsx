import BookForm from '@/components/admin/BookForm';
import styles from '../../dashboard.module.css';

export default function NewBookPage() {
    return (
        <div>
            <h1 className={styles.pageTitle}>도서 등록</h1>
            <BookForm />
        </div>
    );
}

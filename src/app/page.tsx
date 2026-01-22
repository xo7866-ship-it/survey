import Hero from '@/components/Hero';
import BookCard from '@/components/BookCard';
import { BOOKS } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Hero />

      <section className="container" style={{ padding: '4rem 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>추천 도서</h2>
          <p style={{ color: 'var(--text-muted)' }}>지혜서원이 엄선한 이달의 책을 만나보세요</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2.5rem'
        }}>
          {BOOKS.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/books" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center' }}>
            전체 도서 보기 <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>

    </>
  );
}

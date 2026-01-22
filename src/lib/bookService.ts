import { BOOKS as initialBooks, Book } from './data';

// In-memory store (initialized with data.ts)
// NOTE: This resets when the server restarts (dev server reloads)
let booksData = [...initialBooks];

export const bookService = {
    getAll: () => booksData,

    getById: (id: string) => booksData.find(b => b.id === id),

    add: (book: Omit<Book, 'id'>) => {
        const newBook = {
            ...book,
            id: (booksData.length + 1).toString(), // Simple ID generation
        };
        booksData = [newBook, ...booksData]; // Add to front
        return newBook;
    },

    update: (id: string, updates: Partial<Book>) => {
        booksData = booksData.map(b => b.id === id ? { ...b, ...updates } : b);
        return booksData.find(b => b.id === id);
    },

    delete: (id: string) => {
        booksData = booksData.filter(b => b.id !== id);
    }
};

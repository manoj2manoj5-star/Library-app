
import React from 'react';
import { Book } from '../types';
import BookCard from './BookCard';

interface BookGridProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
}

const BookGrid: React.FC<BookGridProps> = ({ books, onSelectBook }) => {
  if (books.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-500">No Books Found</h2>
        <p className="text-gray-400 mt-2">Try adjusting your search or filter.</p>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {books.map(book => (
        <BookCard key={book.id} book={book} onSelectBook={onSelectBook} />
      ))}
    </div>
  );
};

export default BookGrid;

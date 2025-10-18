import React from 'react';
import { Book } from '../types';

interface BookCardProps {
  book: Book;
  onSelectBook: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onSelectBook }) => {
  return (
    <div
      className="group cursor-pointer flex flex-col h-full"
      onClick={() => onSelectBook(book)}
    >
      <div className="relative w-full aspect-[2/3] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300">
        <img
          src={book.coverUrl}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
        
        {/* Summary Overlay */}
        <div className="absolute inset-0 p-3 flex items-end bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-xs leading-snug line-clamp-6">
              {book.summary}
            </p>
        </div>
      </div>
      <div className="pt-3 text-center">
        <h3 className="font-semibold text-sm md:text-base text-amber-900 truncate group-hover:text-amber-700">{book.title}</h3>
        <p className="text-xs md:text-sm text-gray-500 truncate">{book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;

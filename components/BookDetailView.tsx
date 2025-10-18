
import React from 'react';
import { Book } from '../types';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';

interface BookDetailViewProps {
  book: Book;
  onRead: (book: Book) => void;
  onBack: () => void;
}

const BookDetailView: React.FC<BookDetailViewProps> = ({ book, onRead, onBack }) => {
  return (
    <div className="animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center mb-6 text-amber-800 hover:text-amber-600 font-semibold transition-colors"
      >
        <ChevronLeftIcon className="h-5 w-5 mr-1" />
        Back to Library
      </button>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
          <img
            src={book.coverUrl}
            alt={book.title}
            className="w-full aspect-[2/3] object-cover rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex-grow">
          <span className="inline-block bg-amber-200 text-amber-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
            {book.genre}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold font-laila text-amber-900">{book.title}</h1>
          <p className="text-xl text-gray-600 mt-1 mb-6">by {book.author}</p>
          <p className="text-gray-700 leading-relaxed font-laila text-lg">{book.summary}</p>
          <button
            onClick={() => onRead(book)}
            className="mt-8 px-8 py-3 bg-amber-800 text-white font-bold rounded-full hover:bg-amber-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Read First Chapter
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailView;

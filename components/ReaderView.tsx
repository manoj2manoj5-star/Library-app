
import React, { useState, useEffect } from 'react';
import { Book } from '../types';
import { generateChapterContent } from '../services/geminiService';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import Spinner from './Spinner';

interface ReaderViewProps {
  book: Book;
  onBack: () => void;
}

const ReaderView: React.FC<ReaderViewProps> = ({ book, onBack }) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const generatedContent = await generateChapterContent(book);
        setContent(generatedContent);
      } catch (err) {
        setError('Failed to load chapter. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book]);

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center mb-6 text-amber-800 hover:text-amber-600 font-semibold transition-colors"
      >
        <ChevronLeftIcon className="h-5 w-5 mr-1" />
        Back to Details
      </button>

      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
        <div className="text-center mb-8 border-b pb-4 border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold font-laila text-amber-900">{book.title}</h1>
            <p className="text-lg text-gray-500 mt-1">by {book.author}</p>
        </div>
        
        {isLoading && (
          <div className="flex flex-col items-center justify-center min-h-[40vh]">
            <Spinner />
            <p className="mt-4 text-gray-500">Generating chapter...</p>
          </div>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}
        {!isLoading && !error && (
          <div className="prose prose-lg max-w-none font-laila text-gray-800 leading-loose whitespace-pre-wrap">
            {content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReaderView;

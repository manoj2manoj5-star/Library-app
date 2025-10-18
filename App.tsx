
import React, { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
import BookGrid from './components/BookGrid';
import BookDetailView from './components/BookDetailView';
import ReaderView from './components/ReaderView';
import { Book, View } from './types';
import { BOOKS, GENRES } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('grid');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('All');

  const handleSelectBook = useCallback((book: Book) => {
    setSelectedBook(book);
    setCurrentView('detail');
  }, []);

  const handleBack = useCallback(() => {
    if (currentView === 'reader') {
      setCurrentView('detail');
    } else if (currentView === 'detail') {
      setSelectedBook(null);
      setCurrentView('grid');
    }
  }, [currentView]);

  const handleReadBook = useCallback((book: Book) => {
    setSelectedBook(book);
    setCurrentView('reader');
  }, []);

  const filteredBooks = useMemo(() => {
    return BOOKS.filter(book => {
      const matchesGenre = selectedGenre === 'All' || book.genre === selectedGenre;
      const matchesSearch =
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesGenre && matchesSearch;
    });
  }, [searchTerm, selectedGenre]);

  const renderContent = () => {
    switch (currentView) {
      case 'detail':
        return selectedBook && <BookDetailView book={selectedBook} onRead={handleReadBook} onBack={handleBack} />;
      case 'reader':
        return selectedBook && <ReaderView book={selectedBook} onBack={handleBack} />;
      case 'grid':
      default:
        return (
          <>
            <BookGrid books={filteredBooks} onSelectBook={handleSelectBook} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 text-gray-800">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        genres={GENRES}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        showFilters={currentView === 'grid'}
      />
      <main className="container mx-auto p-4 md:p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;

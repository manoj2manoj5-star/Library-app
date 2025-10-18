
import React from 'react';
import SearchBar from './SearchBar';
import GenreFilter from './GenreFilter';
import { BookOpenIcon } from './icons/BookOpenIcon';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  genres: string[];
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
  showFilters: boolean;
}

const Header: React.FC<HeaderProps> = ({
  searchTerm,
  setSearchTerm,
  genres,
  selectedGenre,
  setSelectedGenre,
  showFilters,
}) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 md:px-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            <BookOpenIcon className="h-8 w-8 text-amber-800" />
            <h1 className="text-2xl md:text-3xl font-bold text-amber-900 font-laila">
              Odia Granthalaya
            </h1>
          </div>
          <div className="hidden md:block w-1/3">
             {showFilters && <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
          </div>
        </div>
         {showFilters && (
            <>
                <div className="md:hidden mb-4">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                <GenreFilter
                    genres={genres}
                    selectedGenre={selectedGenre}
                    setSelectedGenre={setSelectedGenre}
                />
            </>
        )}
      </div>
    </header>
  );
};

export default Header;

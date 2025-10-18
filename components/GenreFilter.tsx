
import React from 'react';

interface GenreFilterProps {
  genres: string[];
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ genres, selectedGenre, setSelectedGenre }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {genres.map(genre => (
        <button
          key={genre}
          onClick={() => setSelectedGenre(genre)}
          className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ease-in-out
            ${
              selectedGenre === genre
                ? 'bg-amber-800 text-white shadow-md'
                : 'bg-white text-amber-800 hover:bg-amber-100 border border-amber-200'
            }`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;

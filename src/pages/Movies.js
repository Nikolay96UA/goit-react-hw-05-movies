import { searchMovies } from 'APIService/API';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Search from '../components/Search/Search';
import TrendingMovie from '../components/TrendingMovie/TrendingMovie';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchFilm, setFilm] = useState([]);
  const [totalResults, setTotalResults] = useState(1);
  const filterText = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!filterText) return;
    searchMovies(filterText).then(response => {
      setTotalResults(response.total_results);
      setFilm([...response.results]);
    });
  }, [filterText, totalResults]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.search.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    evt.target.reset();
  };

  return (
    <>
      <Search handleSubmit={handleSubmit} value={filterText} />
      {totalResults !== 0 ? (
        <TrendingMovie movies={searchFilm} />
      ) : (
        <p style={{ margin: '0.5em' }}>There are no results!</p>
      )}
    </>
  );
}

export default Movies;

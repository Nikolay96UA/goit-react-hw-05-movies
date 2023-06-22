import { getMovies } from 'APIService/API';
import TrendingMovie from 'components/TrendingMovie/TrendingMovie';
import { useState, useEffect } from 'react';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(responseObj => {
      setMovies([...responseObj.results]);
    });
  }, [movies]);

  return (
    <>
      <h1 style={{ marginTop: '20px', textAlign: 'center' }}>Weekly Trends</h1>
      <TrendingMovie movies={movies} />
    </>
  );
}

export default Home;

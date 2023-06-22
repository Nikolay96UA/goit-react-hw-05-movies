import { Link, useLocation } from 'react-router-dom';
import { TrendingListItem } from './TrendingMovie.styled';
import PropTypes from 'prop-types';

function TrendingMovie({ movies }) {
  const location = useLocation();

  return (
    <div>
      {movies.map(({ id, title }) => {
        return (
          <TrendingListItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </TrendingListItem>
        );
      })}
    </div>
  );
}

TrendingMovie.propTypes = {
  movies: PropTypes.array,
};

export default TrendingMovie;

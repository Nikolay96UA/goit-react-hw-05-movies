import { getMovieDetails } from 'APIService/API';
import React, { Suspense, useRef } from 'react';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import { GoBackBtn } from 'components/GoBack/GoBackBtn.styled';
import LoaderDna from 'components/Loader/Loader';
import { Movie, Img, InfoLink, InfoContainer } from './MovieDetails.style';
// import NotFound from 'components/ErrorPage/NotFound';

const defaultImg =
  'https://st.depositphotos.com/1001877/1469/i/950/depositphotos_14695835-stock-photo-vintage-movie-camera-3d.jpg';
const baseImgUrl = 'https://image.tmdb.org/t/p/';
const posterSize = 'w400';

function MovieDetails() {
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');
  const [movieCart, setMovieCart] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(resultMovie => setMovieCart({ ...resultMovie }))
      .finally(setIsLoading(false));
  }, [movieId]);

  if (!movieCart) return;
  const { title, poster_path, overview, genres, vote_average } = movieCart;

  return (
    <div>
      <GoBackBtn to={backLink.current}> ◀ Go back</GoBackBtn>

      {isLoading ? (
        <LoaderDna />
      ) : (
        <>
          <Movie>
            <Img>
              <img
                src={
                  poster_path
                    ? baseImgUrl + posterSize + poster_path
                    : defaultImg
                }
                alt="img"
                width="200"
                height="290"
              ></img>
            </Img>

            <div>
              <h2>{title}</h2>
              <p>User Score: {Math.ceil(vote_average * 10)}%</p>
              <h3>Overview</h3>
              <p>{overview} </p>
              <h3>Genres</h3>
              <p>
                {genres &&
                  genres.map(genre => (
                    <span key={genre.id}>{genre.name} </span>
                  ))}
              </p>
            </div>
          </Movie>
          <InfoContainer>
            <h3>Additional information</h3>
            <InfoLink>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </InfoLink>
          </InfoContainer>
          <InfoContainer>
            <Suspense fallback={<LoaderDna />}>
              <Outlet />
            </Suspense>
          </InfoContainer>
        </>
      )}
    </div>
  );
}

export default MovieDetails;

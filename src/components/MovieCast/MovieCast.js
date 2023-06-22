import { getMoviesCredits } from 'APIService/API';
import LoaderDna from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_PATH } from 'APIService/API';
import { CastImg, CastItem, CastList } from './MovieCast.styled';

function MovieCast() {
  const [cast, setCast] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMoviesCredits(movieId)
      .then(res => setCast(res.cast))
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <LoaderDna />}
      {cast?.length > 0 ? (
        <CastList>
          {cast.map(
            ({ credit_id, character, name: characterName, profile_path }) => (
              <CastItem key={credit_id}>
                <CastImg
                  src={
                    profile_path ? (
                      `${IMAGE_PATH}${profile_path}`
                    ) : (
                      <div>No image</div>
                    )
                  }
                  alt={characterName}
                />{' '}
                <p>{characterName}</p>
                <p>Character: {character}</p>
              </CastItem>
            )
          )}
        </CastList>
      ) : (
        <div>Information does not exists.</div>
      )}
    </>
  );
}

export default MovieCast;

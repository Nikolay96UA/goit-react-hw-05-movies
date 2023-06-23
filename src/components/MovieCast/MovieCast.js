import { getMoviesCredits } from 'APIService/API';
import LoaderDna from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_PATH } from 'APIService/API';
import { CastImg, CastItem, CastList } from './MovieCast.styled';

const defaultImg = `https://kartinkin.net/uploads/posts/2022-02/thumbs/1645764528_2-kartinkin-net-p-na-profil-kartinki-2.jpg`;

function MovieCast() {
  const [cast, setCast] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMoviesCredits(movieId)
      .then(res => setCast(res.cast))
      .catch(error => console.log(error))
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
                    profile_path
                      ? `${IMAGE_PATH}${profile_path}`
                      : `${defaultImg}`
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

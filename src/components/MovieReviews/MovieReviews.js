import { getMoviesReviews } from 'APIService/API';
import LoaderDna from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsItem, ReviewsList } from './MovieReviewx.styled';

function MovieReviews() {
  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getMoviesReviews(movieId)
      .then(res => setReviews(res.results))
      .finally(setIsLoading(false));
    console.log(reviews);
  }, [movieId, reviews]);

  return (
    <>
      {isLoading && <LoaderDna />}
      {reviews?.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ author, id, content }) => (
            <ReviewsItem key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        <div>Information does not exists.</div>
      )}
    </>
  );
}

export default MovieReviews;

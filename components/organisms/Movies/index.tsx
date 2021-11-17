import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { getMovies } from '../../../services/data_api';
import { DetailMovieTypes } from '../../../services/data_types';
import MovieItem from '../../molecules/MovieItem';

export default function Movies() {
  const [query, setQuery] = useState('popular');
  const [movies, setMovies] = useState([]);

  const getMoviesAPI = useCallback(async (param) => {
    const response: any = await getMovies(param);
    setMovies(response.results);
  }, []);

  useEffect(() => {
    getMoviesAPI(query);
  }, [query]);

  return (
    <div className="section-movies container-xxxl mt-0 mt-lg-5 mb-5">
      <div className="mb-5 d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column align-items-start gap-3">
          <h3 className="fw-bold">Movies</h3>
          <div className="button-wrapper d-flex">
            <button
              type="button"
              className={`btn btn-trending ${query === 'popular' ? 'btn-active' : ''}`}
              onClick={() => setQuery('popular')}
            >
              Popular
            </button>
            <button
              type="button"
              className={`btn btn-trending ${query === 'upcoming' ? 'btn-active' : ''}`}
              onClick={() => setQuery('upcoming')}
            >
              Upcoming
            </button>
          </div>
        </div>
        <div className="align-self-end">
          <Link href={`/movies/based?q=${query}&page=1`}>
            <a className="view-all">
              View All
            </a>
          </Link>
        </div>
      </div>
      <div className="grid-wrapper flex-row flex-wrap">
        <div className="row row-cols-auto">
          {movies.map((movie: DetailMovieTypes) => (
            <MovieItem
              key={movie.id}
              id={movie.id}
              title={movie.title}
              release_date={movie.release_date}
              poster={movie.poster_path}
              rate={movie.vote_average}
              count={movie.vote_count}
              type="poster"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

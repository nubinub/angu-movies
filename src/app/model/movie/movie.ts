import Genre from '../genre/genre';
import EType from '../type/type-enum';

interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  runtime?: number;
  overview: string;
  genres?: Genre[];
  type: EType.Movie;
  backdrop_path: string;
  vote_average: number;
}

export default Movie;

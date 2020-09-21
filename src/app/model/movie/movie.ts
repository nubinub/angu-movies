import Genre from '../genre/genre';

interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  runtime?: number;
  overview: string;
  genres?: Genre[];
}

export default Movie;

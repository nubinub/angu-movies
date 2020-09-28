import Genre from '../genre/genre';
import EType from '../type/type-enum';

interface TvShow {
    id: number;
    original_name: string;
    poster_path: string;
    first_air_date: string;
    overview: string;
    type: EType.TvShow;
    genres?: Genre[];
    number_of_episodes?: number;
    number_of_seasons?: number;
}

export default TvShow;

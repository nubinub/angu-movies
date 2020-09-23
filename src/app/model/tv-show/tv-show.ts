import { TvShowService } from 'src/app/services/tv-show/tv-show.service';
import Movie from '../movie/movie';
import EType from '../type/type-enum';

interface TvShow {
    id: number;
    original_name: string;
    poster_path: string;
    first_air_date: string;
    overview: string;
    type: EType.TvShow;
}

export default TvShow;

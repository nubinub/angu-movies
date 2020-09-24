import EType from '../type/type-enum';

export interface SearchParams {
    query?: string;
    type?: EType;
    year?: number;
}

export interface MoviesSearchParams {
    query?: string;
    primary_release_year?: number;
}

export interface TvShowsSearchParams {
    query?: string;
    first_air_date_year?: number;
}

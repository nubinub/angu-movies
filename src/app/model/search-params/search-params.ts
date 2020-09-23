import EType from '../type/type-enum';

interface SearchParams {
    query?: string;
    type?: EType;
    year?: number;
}

export default SearchParams;

import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/requestsAPI';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState('');
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        if (searchParams.get("query")) {
            searchMovies(searchParams.get("query"))
                .then(resp => setMovieData(resp.results))
                .catch(err => console.log(err));
        };
    }, [searchParams]);

    function handleChange(event) {
        setQuery(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();
        setSearchParams({ query });
        setQuery('');
    };
    
    return (
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleChange} />
                <button>Search</button>
            </form>
            <ul className={s.list}>
                {movieData?.map(({ id, original_title }) => (
                    <li key={id}><Link to={`/movies/${id}`} state={`/movies?query=${searchParams.get("query")}`}>{original_title}</Link></li>
                ))}
            </ul>
        </div>
    );
};
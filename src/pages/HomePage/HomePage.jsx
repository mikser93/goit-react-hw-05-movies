import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from '../../services/requestsAPI';
import s from './HomePage.module.css';

export default function HomePage() {
    const [trendingList, setTrendingList] = useState([]);

    useEffect(() => {
        getTrending()
        .then(resp => setTrendingList(resp.results))
        .catch(err => console.log(err));
    }, [])

    return (
        <div className={s.page}>
            <h1>Trending tooday</h1>
            <ul className={s.list}>
                {trendingList.map(({ id, title }) => (
                    <li key={id}><Link to={`/movies/${id}`} state={'/'}>{title}</Link></li>
                ))}
            </ul>
        </div>
    );
};
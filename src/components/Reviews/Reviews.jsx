import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/requestsAPI';
import s from './Reviews.module.css';


export default function Reviews() {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieReviews(movieId)
            .then(resp => setReviews(resp.results))
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (reviews?.length > 0) {
        return (
            <ul className={s.list}>
                {reviews.map(({ id, author, content }) => (
                    <li className={s.item} key={id}>
                        <p style={{ fontWeight: '700' }}>Author: {author}</p>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
        );
    } else {
        return (<p className={s.item}>We don't have any review for this movie</p>);
    };
};
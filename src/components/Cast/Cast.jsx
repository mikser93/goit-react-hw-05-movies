import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieActors } from '../../services/requestsAPI';
import noimage from '../../images/noimage.png';
import s from './Cast.module.css';

export default function Cast() {
    const [actors, setActors] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieActors(movieId)
            .then(resp => setActors(resp.cast.slice(0, 20)))
            .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    if (actors?.length > 0) {
        return (
            <ul className={s.list}>
                {actors.map(({ id, profile_path, original_name, character }) => (
                    <li className={s.item} key={id}>
                        <img src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : noimage} width="80px" alt="actor_poster" />
                        <p>{original_name}</p>
                        <p>Character: {character}</p>
                    </li>
                ))}
            </ul>
        );
    } else {
        return (<p className={s.item}>We don't have any actor for this movie</p>);
    };
};
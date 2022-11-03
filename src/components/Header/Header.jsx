import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export default function Header() {
    
    return (
        <div className={s.header}>
            <NavLink
                className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link} to={'/'} end={true} >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link} to={'/movies'} >
                Movies
            </NavLink>
        </div>
    );
};
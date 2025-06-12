import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import logo from '../../assets/logo.svg';
import s from './Header.module.css';

// const navigate = useNavigate();   

    export default function Header() {
        const buildLinkClass = ({ isActive }) => {
            return clsx(s.link, isActive && s.active);
        };
    return (
        <div className={s.header}>
            <img className={s.logo} src={logo} alt="logo" />
            <div className={s.links}>
                <NavLink className={buildLinkClass} to="/">
                    Home
                </NavLink>
                <NavLink className={buildLinkClass} to="/catalog">
                    Catalog
                </NavLink>
            </div>
        </div>
    )
} 
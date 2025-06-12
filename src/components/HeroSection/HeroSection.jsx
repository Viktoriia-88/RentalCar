import { NavLink } from 'react-router-dom';
import s from './HeroSection.module.css';

export default function HeroSection() { 
    return (
        <section className={s.heroSection}>
            <div className={s.hero}>
                <h1 className={s.title}>Find your perfect rental car</h1>
                <p className={s.text}>Reliable and budget-friendly rentals for any journey</p>
                <NavLink className={s.linkCatalog} to="/catalog">
                    View Catalog
                </NavLink>
            </div>
        </section>
    );
};
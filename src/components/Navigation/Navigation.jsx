import { Link, NavLink } from 'react-router';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={s.navWrapper}>
      <Link to="/">
        <img src="/logo.svg" alt="Logo" className={s.logo} />
      </Link>
      <div className={s.nav}>
        <NavLink to="/" className={s.link}>
          Home
        </NavLink>
        <NavLink to="catalog" className={s.link}>
          Catalog
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;

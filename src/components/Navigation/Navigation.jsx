import { Link, NavLink } from 'react-router';
import clsx from 'clsx';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={s.navWrapper}>
      <Link to="/">
        <img src="/logo.svg" alt="Logo" className={s.logo} />
      </Link>
      <div className={s.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
        >
          Home
        </NavLink>

        <NavLink
          to="/catalog"
          className={({ isActive }) => clsx(s.link, isActive && s.active)}
        >
          Catalog
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;

import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul className={css.nav_list}>
          <li className={css.nav_item}>
            <NavLink to="/" className={css.nav_link}>
              Home
            </NavLink>
          </li>
          <li className={css.nav_item}>
            <NavLink to="/catalog" className={css.nav_link}>
              Catalog
            </NavLink>
          </li>
          <li className={css.nav_item}>
            <NavLink to="/favorites" className={css.nav_link}>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
      <Suspense
        fallback={
          <div>
            <h1>Loading...</h1>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;

import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Layout from './Layout/Layout';
import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites/Favorites';
// import css from './App.module.css';

export const App = () => {
  return (
    <div>
      <section>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </section>
    </div>
  );
};

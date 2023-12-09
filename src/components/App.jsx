import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Layout from './Layout/Layout';
import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites/Favorites';

export const App = () => {
  return (
    <div>
      <h2>TestTaskGoIT</h2>
      <section>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </section>
    </div>
  );
};

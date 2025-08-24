import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CatalogPage from './pages/CatalogPage/CatalogPage';
import CamperPage from './pages/CamperPage/CamperPage';
import Features from './components/Features/Features';
import Reviews from './components/Reviews/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CamperPage />}>
          <Route index element={<Navigate to="features" replace />} />
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;

import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loaders/Loader';
import SuspenseLoader from './components/Loaders/SuspenseLoader';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const Layout = lazy(() => import('./components/Layout/Layout'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const CamperPage = lazy(() => import('./pages/CamperPage/CamperPage'));
const Features = lazy(() => import('./components/Features/Features'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

const App = () => {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Suspense fallback={<SuspenseLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<CamperPage />}>
              <Route index element={<Navigate to="features" replace />} />
              <Route path="features" element={<Features />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>

      <Loader />
    </>
  );
};

export default App;

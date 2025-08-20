import { Suspense } from 'react';
import Container from '../Container/Container';
import Header from '../Header/Header';
import s from './Layout.module.css';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </div>
  );
};

export default Layout;

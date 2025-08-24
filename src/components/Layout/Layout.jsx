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
          <Outlet />
        </Container>
      </main>
    </div>
  );
};

export default Layout;

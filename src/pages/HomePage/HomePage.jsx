import s from './Homepage.module.css';

const HomePage = () => {
  return (
    <section className={s.hero}>
      <div className={s.headerWrapper}>
        <h1 className={s.header}>Campers of your dreams</h1>
        <p className={s.description}>
          You can find everything you want in our catalog
        </p>
        <a href="/catalog" className={s.link}>
          View Now
        </a>
      </div>
    </section>
  );
};

export default HomePage;

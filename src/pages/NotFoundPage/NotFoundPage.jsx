import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(3);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Oops! We can&apos;t find that page</h2>
      <p>Don't worry...we'll help you get back home.</p>
      <p className={s.timer}>{secondsLeft}</p>
    </div>
  );
};

export default NotFoundPage;

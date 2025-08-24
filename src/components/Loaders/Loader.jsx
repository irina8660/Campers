import { useSelector } from 'react-redux';
import s from './Loader.module.css';
import { MoonLoader } from 'react-spinners';

const Loader = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);

  if (!isLoading) return null;

  return (
    <div className={s.backdrop}>
      <MoonLoader color="#E44848" />
    </div>
  );
};

export default Loader;

import { useDispatch, useSelector } from 'react-redux';
import s from './ButtonAddToFavorites.module.css';
import { selectFavoritesIds } from '../../redux/favorites/selectors';
import { toggleFavorites } from '../../redux/favorites/slice';
import clsx from 'clsx';

const ButtonAddToFavorites = ({ camperId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoritesIds);
  const isFavorite = favorites.includes(camperId);

  const handleToggle = () => {
    dispatch(toggleFavorites(camperId));
  };

  return (
    <button
      className={s.button}
      onClick={handleToggle}
      aria-label="Toggle favorite"
    >
      <svg
        className={clsx(s.heart, { [s.active]: isFavorite })}
        width="24"
        height="24"
      >
        <use xlinkHref="/icons.svg#heart" />
      </svg>
    </button>
  );
};

export default ButtonAddToFavorites;

import s from './StarRating.module.css';

const StarRating = ({ rating }) => {
  const fullStars = Math.round(rating); // або Math.floor
  const totalStars = 5;

  return (
    <div className={s.starWrapper}>
      {Array.from({ length: totalStars }, (_, i) => (
        <svg key={i} className={i < fullStars ? s.star : s.starEmpty}>
          <use xlinkHref="/icons.svg#star" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;

import s from './InfoItem.module.css';

const InfoItem = ({ rating, reviews, location }) => {
  return (
    <div className={s.infoWrapper}>
      <div className={s.info}>
        <svg className={s.star} width="16" height="16">
          <use xlinkHref="/icons.svg#star" />
        </svg>
        <p className={s.rating}>
          {rating} ({reviews?.length || 0} Reviews)
        </p>
      </div>

      <div className={s.info}>
        <svg className={s.icon} width="20" height="20">
          <use xlinkHref="/icons.svg#map" />
        </svg>
        <p className={s.location}>{location}</p>
      </div>
    </div>
  );
};

export default InfoItem;

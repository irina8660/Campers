import { useSelector } from 'react-redux';
import { selectCurrentCamper } from '../../redux/campers/selectors';
import s from './Reviews.module.css';
import StarRating from '../StarRating/StarRating';

const Reviews = () => {
  const { reviews } = useSelector(selectCurrentCamper);

  return (
    <ul className={s.reviewsList}>
      {reviews.map(({ reviewer_name, reviewer_rating, comment }, index) => (
        <li key={index} className={s.reviewItem}>
          <div className={s.generalInfo}>
            <div className={s.avatarWrapper}>
              <div className={s.avatar}>
                {reviewer_name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div>
              <p className={s.name}>{reviewer_name}</p>
              <StarRating rating={reviewer_rating} />
            </div>
          </div>

          <p className={s.comment}>{comment}</p>
        </li>
      ))}
    </ul>
  );
};
export default Reviews;

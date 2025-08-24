import ButtonAddToFavorites from '../ButtonAddToFavorites/ButtonAddToFavorites';
import InfoItem from '../InfoItem/InfoItem';
import EquipmentsList from '../EquipmentsList/EquipmentsList';
import s from './CamperItem.module.css';
import { useNavigate } from 'react-router-dom';

const CamperItem = ({ camper }) => {
  const { id, name, price, rating, location, gallery, description, reviews } =
    camper;
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate(`/catalog/${camper.id}`);
  };

  return (
    <li className={s.item}>
      <div className={s.imgWrapper}>
        <img
          className={s.img}
          src={gallery?.[0]?.original}
          alt={`Photo of ${name}`}
          width="290"
          height="310"
        />
      </div>

      <div className={s.details}>
        <div className={s.generalInfo}>
          <h2 className={s.itemHeader}>{name}</h2>
          <div className={s.priceWrapper}>
            <p className={s.price} aria-label={`Price: ${price} euros`}>
              {`€${price}.00`}
            </p>
            <ButtonAddToFavorites camperId={id} />
          </div>
        </div>

        <div className={s.descriptionWrapper}>
          <div className={s.infoWrapper}>
            <InfoItem rating={rating} reviews={reviews} location={location} />
          </div>

          <p
            className={s.description}
            aria-label={`Description: ${description}`}
          >
            {description}
          </p>

          <EquipmentsList camper={camper} />

          <button
            onClick={handleShowMore}
            className={s.button}
            type="button"
            aria-label={`Show more details about ${name}`}
          >
            Show more
          </button>
        </div>
      </div>
    </li>
  );
};

export default CamperItem;

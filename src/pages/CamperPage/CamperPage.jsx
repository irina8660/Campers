import { NavLink, Outlet, useParams } from 'react-router';
import s from './CamperPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCamperById } from '../../redux/campers/operations';
import { selectCurrentCamper } from '../../redux/campers/selectors';
import InfoItem from '../../components/InfoItem/InfoItem';
import clsx from 'clsx';
import BookingForm from '../../components/BookingForm/BookingForm';

const CamperPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(selectCurrentCamper);

  console.log(camper);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (!camper) return <p>Loading...</p>;

  const { name, price, rating, location, gallery, description, reviews } =
    camper;

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <h2 className={s.name}>{name}</h2>
        <InfoItem rating={rating} reviews={reviews} location={location} />
        <p className={s.price}>{`€${price}.00`}</p>
      </div>

      <div className={s.gallery}>
        {gallery.map((img, index) => (
          <div className={s.galleryItem} key={index}>
            <img
              src={img.original}
              alt={`Photo ${index + 1} of ${name}`}
              className={s.image}
            />
          </div>
        ))}
      </div>

      <p className={s.description}>{description}</p>

      <div className={s.tabs}>
        <div className={s.nav}>
          <div className={s.links}>
            <NavLink
              to="features"
              className={({ isActive }) =>
                clsx(s.link, { [s.active]: isActive })
              }
            >
              Features
            </NavLink>
            <NavLink
              to="reviews"
              className={({ isActive }) =>
                clsx(s.link, { [s.active]: isActive })
              }
            >
              Reviews
            </NavLink>
          </div>
        </div>
        <div className={s.tabsWrapper}>
          <Outlet />
          <BookingForm />
        </div>
      </div>
    </div>
  );
};
export default CamperPage;

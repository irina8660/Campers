import CamperItem from '../CamperItem/CamperItem';
import s from './CampersList.module.css';

const CampersList = ({ campers }) => {
  if (!Array.isArray(campers)) return null;
  console.log(
    '🧩 IDs in list:',
    campers.map((camper) => camper.id),
  );
  return (
    <ul className={s.list}>
      {campers.map((camper) => (
        <CamperItem key={camper.id} camper={camper} />
      ))}
    </ul>
  );
};

export default CampersList;

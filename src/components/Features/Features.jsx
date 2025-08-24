import { useSelector } from 'react-redux';
import EquipmentsList from '../EquipmentsList/EquipmentsList';
import s from './Features.module.css';
import { selectCurrentCamper } from '../../redux/campers/selectors';

const Features = () => {
  const camper = useSelector(selectCurrentCamper);

  if (!camper) return null;

  const details = [
    { label: 'Form', value: camper.form },
    { label: 'Length', value: camper.length },
    { label: 'Width', value: camper.width },
    { label: 'Height', value: camper.height },
    { label: 'Tank', value: camper.tank },
    { label: 'Consumption', value: camper.consumption },
  ];

  return (
    <div className={s.wrapper}>
      <EquipmentsList camper={camper} />

      <div className={s.detailsWrapper}>
        <h3 className={s.title}>Vehicle details</h3>
        <ul className={s.detailsList}>
          {details.map(({ label, value }) => (
            <li className={s.detail} key={label}>
              <span className={s.label}>{label}:</span>
              <span className={s.value}>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;

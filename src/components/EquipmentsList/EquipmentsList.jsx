import s from './EquipmentsList.module.css';

const EquipmentsList = ({ camper }) => {
  const {
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = camper;

  const equipmentMap = [
    {
      key: 'transmission',
      label: transmission,
      icon: 'transmission',
      condition: !!transmission,
    },
    { key: 'engine', label: engine, icon: 'engine', condition: !!engine },
    { key: 'AC', label: 'AC', icon: 'ac', condition: AC },
    {
      key: 'bathroom',
      label: 'Bathroom',
      icon: 'bathroom',
      condition: bathroom,
    },
    { key: 'kitchen', label: 'Kitchen', icon: 'kitchen', condition: kitchen },
    { key: 'TV', label: 'TV', icon: 'tv', condition: TV },
    { key: 'radio', label: 'Radio', icon: 'radio', condition: radio },
    {
      key: 'refrigerator',
      label: 'Refrigerator',
      icon: 'refrigerator',
      condition: refrigerator,
    },
    {
      key: 'microwave',
      label: 'Microwave',
      icon: 'microwave',
      condition: microwave,
    },
    { key: 'gas', label: 'Gas', icon: 'gas', condition: gas },
    { key: 'water', label: 'Water', icon: 'water', condition: water },
  ];

  const visibleEquipments = equipmentMap
    .filter(({ condition }) => condition)
    .slice(0, 7);

  return (
    <ul className={s.equipments} aria-label="Vehicle equipment">
      {visibleEquipments.map(({ key, label, icon }) => (
        <li key={key} className={s.equipment}>
          <svg className={s.icon} width="20" height="20" aria-hidden="true">
            <use xlinkHref={`/icons.svg#${icon}`} />
          </svg>
          {label}
        </li>
      ))}
    </ul>
  );
};

export default EquipmentsList;

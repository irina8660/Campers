import { useDispatch, useSelector } from 'react-redux';
import {
  toggleEquipment,
  setForm,
  resetFilters,
} from '../../redux/filters/slice';
import {
  selectEquipment,
  selectFilters,
  selectForm,
} from '../../redux/filters/selectors';
import clsx from 'clsx';
import s from './FiltersPanel.module.css';
import { useEffect, useRef, useState } from 'react';
import { clearItems, setPage } from '../../redux/campers/slice';
import { fetchCampers } from '../../redux/campers/operations';

const FiltersPanel = () => {
  const [showMore, setShowMore] = useState(false);
  const [maxHeight, setMaxHeight] = useState('208px');
  const equipmentWrapperRef = useRef(null);

  const dispatch = useDispatch();
  const equipment = useSelector(selectEquipment);
  const form = useSelector(selectForm);
  const filters = useSelector(selectFilters);

  const allEquipmentOptions = [
    { key: 'transmission', label: 'Automatic', icon: 'transmission' },
    { key: 'AC', label: 'AC', icon: 'ac' },
    { key: 'bathroom', label: 'Bathroom', icon: 'bathroom' },
    { key: 'kitchen', label: 'Kitchen', icon: 'kitchen' },
    { key: 'refrigerator', label: 'Refrigerator', icon: 'refrigerator' },
    { key: 'TV', label: 'TV', icon: 'tv' },
    { key: 'radio', label: 'Radio', icon: 'radio' },
    { key: 'microwave', label: 'Microwave', icon: 'microwave' },
    { key: 'gas', label: 'Gas', icon: 'gas' },
    { key: 'water', label: 'Water', icon: 'water' },
  ];

  const allVehicleTypes = [
    { key: 'panelTruck', label: 'Van', icon: 'panelTruck' },
    { key: 'fullyIntegrated', label: 'Fully Integrated', icon: 'fully' },
    { key: 'alcove', label: 'Alcove', icon: 'alcove' },
  ];

  useEffect(() => {
    const scrollHeight = equipmentWrapperRef.current?.scrollHeight ?? 0;
    setMaxHeight(showMore ? `${scrollHeight}px` : '208px');
  }, [showMore]);

  const handleSearch = () => {
    dispatch(clearItems());
    dispatch(setPage(1));

    const filtersToSend = {
      location: filters.location,
      form: filters.form,
    };

    filters.equipment.forEach((item) => {
      if (item === 'transmission') {
        filtersToSend.transmission = 'automatic';
      } else {
        filtersToSend[item] = true;
      }
    });

    dispatch(fetchCampers(filtersToSend));
  };

  const handleReset = () => {
    dispatch(resetFilters());
    dispatch(setPage(1));
    dispatch(fetchCampers({}));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.sectionWrapper}>
        <h3 className={s.sectionHeader}>Location</h3>
        <div className={s.inputWrapper}>
          <svg className={s.locationIcon} width="20" height="20">
            <use xlinkHref="/icons.svg#map" />
          </svg>
          <input
            placeholder="City"
            className={s.locationInput}
            type="text"
            aria-label="Enter location"
          />
        </div>
      </div>

      <div className={s.sectionWrapper}>
        <h3 className={s.sectionHeader}>Filters</h3>
        <div className={s.section}>
          <div className={s.filterGroup}>
            <h3 className={s.header}>Vehicle equipment</h3>
            <div
              ref={equipmentWrapperRef}
              className={s.filterListWrapper}
              style={{ maxHeight }}
            >
              <div className={s.filterList}>
                {allEquipmentOptions.map(({ key, label, icon }) => (
                  <button
                    key={key}
                    className={clsx(s.filterItem, {
                      [s.active]: equipment.includes(key),
                    })}
                    type="button"
                    onClick={() => dispatch(toggleEquipment(key))}
                    aria-label={`Toggle ${label} filter`}
                  >
                    <svg className={s.icon} width="32" height="32">
                      <title>{label}</title>
                      <use xlinkHref={`/icons.svg#${icon}`} />
                    </svg>
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <button
              className={s.showMoreBtn}
              type="button"
              onClick={() => setShowMore((prev) => !prev)}
              aria-label={
                showMore ? 'Hide extra equipment' : 'Show more equipment'
              }
            >
              {showMore ? 'Less...' : 'Show more...'}
            </button>
          </div>

          <div className={s.filterGroup}>
            <h3 className={s.header}>Vehicle type</h3>
            <div className={s.filterList}>
              {allVehicleTypes.map(({ key, label, icon }) => (
                <button
                  key={key}
                  className={clsx(s.filterItem, {
                    [s.active]: form === key,
                  })}
                  type="button"
                  onClick={() => dispatch(setForm(key))}
                  aria-label={`Set vehicle type to ${label}`}
                >
                  <svg className={s.icon} width="32" height="32">
                    <title>{label}</title>
                    <use xlinkHref={`/icons.svg#${icon}`} />
                  </svg>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={s.buttonWrapper}>
        <button
          className={s.searchButton}
          type="button"
          aria-label="Search campers"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className={s.resetButton}
          type="button"
          aria-label="Reset filters"
          onClick={handleReset}
        >
          Reset all
        </button>
      </div>
    </div>
  );
};

export default FiltersPanel;

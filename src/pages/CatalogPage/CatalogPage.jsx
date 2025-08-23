import { useDispatch, useSelector } from 'react-redux';
import CampersList from '../../components/CampersList/CampersList';
import FiltersPanel from '../../components/FiltersPanel/FiltersPanel';
import s from './CatalogPage.module.css';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations';
import {
  selectCampers,
  selectHasNextPage,
  selectLimit,
  selectPage,
} from '../../redux/campers/selectors';
import { selectFilters } from '../../redux/filters/selectors';
import { setPage } from '../../redux/campers/slice';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilters);
  const campers = useSelector(selectCampers);

  const page = useSelector(selectPage);
  const limit = useSelector(selectLimit);
  const hasNextPage = useSelector(selectHasNextPage);

  useEffect(() => {
    dispatch(fetchCampers({ filters, page, limit }));
  }, [dispatch, filters, page, limit]);

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className={s.wrapper}>
      <div>
        <FiltersPanel />
      </div>
      <div className={s.list}>
        <CampersList campers={campers} />
        {hasNextPage && (
          <button className={s.loadMore} onClick={handleLoadMore}>
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;

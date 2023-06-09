import { useEffect } from 'react';
import Header from './Header';
import BallanceBar from './BallanceBar';
import FilterBar from './FilterBar';
import styles from './Calls.module.scss';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { fetchCallsRequest } from '@store/calls/actions';
import Table from './Table';

const Calls = () => {
  const { pending, error } = useAppSelector((state) => state.calls);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCallsRequest());
  }, [dispatch]);

  return (
    <div className={styles.calls}>
      <Header />
      <BallanceBar />
      <FilterBar />

      {pending && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!pending && !error && <Table />}
    </div>
  );
};

export default Calls;

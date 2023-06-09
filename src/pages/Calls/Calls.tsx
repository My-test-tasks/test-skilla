import Header from './Header';
import BallanceBar from './BallanceBar';
import FilterBar from './FilterBar';
import styles from './Calls.module.scss';

const Calls = () => {
  return (
    <div className={styles.calls}>
      <Header />
      <BallanceBar />
      <FilterBar />
    </div>
  );
};

export default Calls;

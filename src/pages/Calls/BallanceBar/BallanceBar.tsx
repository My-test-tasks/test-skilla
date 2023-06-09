import Ballance from './Ballance';
import styles from './BallanceBar.module.scss';
import DateInterval from './DateInterval';

const BallanceBar = () => {
  return (
    <div className={styles.bar}>
      <Ballance />
      <DateInterval />
    </div>
  );
};

export default BallanceBar;

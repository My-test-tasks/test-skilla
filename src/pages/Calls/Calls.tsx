import BallanceBar from './BallanceBar';
import Header from './Header';
import styles from './Calls.module.scss';

const Calls = () => {
  return (
    <div className={styles.calls}>
      <Header />
      <BallanceBar />
    </div>
  );
};

export default Calls;

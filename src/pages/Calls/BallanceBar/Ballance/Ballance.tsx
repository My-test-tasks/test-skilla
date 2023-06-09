import { ReactComponent as AddIcon } from '@assets/icons/add.svg';
import styles from './Ballance.module.scss';

const Ballance = () => {
  const ballance = '272 ₽';

  return (
    <div className={styles.ballance}>
      <span>Баланс: </span>
      <span className={styles.sum}>{ballance}</span>
      <AddIcon className={styles.icon} />
    </div>
  );
};

export default Ballance;

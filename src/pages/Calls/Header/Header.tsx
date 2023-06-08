import CallAnalytics from './CallAnalytics/CallAnalytics';
import styles from './Header.module.scss';
import getDate from '@utils/date';
import Organizations from './Organizations';
import User from './User';

const Header = () => {
  const date = getDate();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.date}>{date}</div>
        <CallAnalytics />
        <Organizations />
        <User />
      </div>
    </header>
  );
};

export default Header;

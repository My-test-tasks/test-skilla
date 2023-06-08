import styles from './User.module.scss';
import avatarBoss from '@assets/avatars/boss.png';
import arrowIcon from '@assets/icons/arrow_down.svg';

const User = () => {
  return (
    <div className={styles.user}>
      <img src={avatarBoss} alt='avatar' />
      <img src={arrowIcon} alt='icon' />
    </div>
  );
};

export default User;

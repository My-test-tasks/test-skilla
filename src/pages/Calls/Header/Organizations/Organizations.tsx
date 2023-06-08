import styles from './Organizations.module.scss';
import searchIcon from '@assets/icons/search.svg';
import arrowIcon from '@assets/icons/arrow_down.svg';

const Organizations = () => {
  return (
    <div className={styles.organizations}>
      <img src={searchIcon} alt='icon' className={styles.search} />
      <p>ИП Сидорова Александра Михайловна</p>
      <img src={arrowIcon} alt='icon' />
    </div>
  );
};

export default Organizations;

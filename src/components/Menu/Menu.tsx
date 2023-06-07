import ButtonWithIcon, { ButtonWithIconTypes } from '@components/ButtonWithIcon';
import logoIcon from '@assets/icons/logo.svg';
import chartIcon from '@assets/icons/chart.svg';
import ordersIcon from '@assets/icons/orders.svg';
import mailIcon from '@assets/icons/mail.svg';
import callsIcon from '@assets/icons/calls.svg';
import peopleIcon from '@assets/icons/people.svg';
import documentsIcon from '@assets/icons/documents.svg';
import executorIcon from '@assets/icons/executor.svg';
import briefcaseIcon from '@assets/icons/briefcase.svg';
import libraryIcon from '@assets/icons/library.svg';
import settingsIcon from '@assets/icons/settings.svg';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <aside className={styles.menu}>
      <div className={styles.logo}>
        <img src={logoIcon} alt='Logo' />
      </div>

      <div className={styles.list}>
        <div className={styles.item}>
          <img src={chartIcon} alt='icon' className={styles.icon} />
          <span className={styles.title}>Итоги</span>
        </div>

        <div className={styles.item}>
          <img src={ordersIcon} alt='icon' className={styles.icon} />
          <span className={styles.title}>Заказы</span>
        </div>

        <div className={styles.item}>
          <img src={mailIcon} alt='icon' className={styles.icon} />
          <span className={styles.title}>Сообщения</span>
        </div>

        <div className={`${styles.item} ${styles.active}`}>
          <img src={callsIcon} alt='icon' className={styles.icon} />
          <span className={styles.title}>Звонки</span>
        </div>

        <div className={styles.item}>
          <img src={peopleIcon} alt='icon' className={styles.icon} />
          <span className={styles.title}>Контрагенты</span>
        </div>

        <div className={styles.item}>
          <img src={documentsIcon} alt='icon' className={styles.icon} />
          <span className={styles.title}>Документы</span>
        </div>

        <div className={styles.item}>
          <img src={executorIcon} alt='icon' className={styles.icon} />
          <span className={styles.title}>Исполнители</span>
        </div>

        <div className={styles.item}>
          <img src={briefcaseIcon} alt='icon' className={styles.icon} />
          <span className={styles.title}>Отчеты</span>
        </div>

        <div className={styles.item}>
          <img src={libraryIcon} alt='icon' className={styles.icon} />
          <span className={styles.title}>База знаний</span>
        </div>

        <div className={styles.item}>
          <img src={settingsIcon} alt='icon' className={styles.icon} />
          <span className={styles.title}>Настройки</span>
        </div>
      </div>

      <ButtonWithIcon type={ButtonWithIconTypes.add} className={styles.button} />

      <ButtonWithIcon type={ButtonWithIconTypes.pay} className={styles.button} />
    </aside>
  );
};

export default Menu;

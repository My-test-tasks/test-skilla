import { ReactComponent as LeftArrowIcon } from '@assets/icons/arrow_left.svg';
import { ReactComponent as RightArrowIcon } from '@assets/icons/arrow_right.svg';
import { ReactComponent as CalendarIcon } from '@assets/icons/calendar.svg';
import styles from './DateInterval.module.scss';
import { useState } from 'react';

const DateInterval = () => {
  const intervals = ['3 дня', 'Неделя', 'Месяц', 'Год'];
  const interval = intervals[0];
  const [show, setShow] = useState(false);

  return (
    <div className={styles.select}>
      <div className={styles.icon}>
        <LeftArrowIcon />
      </div>
      <div className={styles.interval} onClick={() => setShow((show) => !show)}>
        <CalendarIcon className={styles.icon} />
        {interval}
      </div>
      <div className={styles.icon}>
        <RightArrowIcon className={styles.icon} />
      </div>

      <div className={`${styles.dropdown} ${show && styles.show}`}>
        {intervals.map((value) => (
          <div key={value} className={styles.item}>
            {value}
          </div>
        ))}
        <div className={styles.item}>Указать даты</div>
        <div className={`${styles.item} ${styles.date}`}>
          <span> __.__.__-__.__.__</span>
          <CalendarIcon />
        </div>
      </div>
    </div>
  );
};

export default DateInterval;

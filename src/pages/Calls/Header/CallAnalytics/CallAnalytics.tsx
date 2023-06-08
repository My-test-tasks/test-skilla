import styles from './CallAnalytics.module.scss';

const CallAnalytics = () => {
  return (
    <div className={styles.analytics}>
      <div className={styles.block}>
        <p className={styles.title}>
          Новые звонки
          <span className={`${styles.result} ${styles.green}`}> 20 из 30 шт.</span>
        </p>
        <progress max='100' value='42' className={`${styles.bar} ${styles.green}`}></progress>
      </div>
      <div className={styles.block}>
        <p className={styles.title}>
          Качество разговоров
          <span className={`${styles.result}  ${styles.yellow}`}> 40%</span>
        </p>
        <progress max='100' value='40' className={`${styles.bar}  ${styles.yellow}`}></progress>
      </div>
      <div className={styles.block}>
        <p className={styles.title}>
          Конверсия в заказ
          <span className={`${styles.result} ${styles.red}`}> 67%</span>
        </p>
        <progress max='100' value='55' className={`${styles.bar} ${styles.red}`}></progress>
      </div>
    </div>
  );
};

export default CallAnalytics;

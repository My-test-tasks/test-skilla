import { FC } from 'react';
import { RatingTypes } from '../Rating';
import styles from './RatingDots.module.scss';

type RatingDotsProps = {
  rating: RatingTypes;
};

const RatingDots: FC<RatingDotsProps> = ({ rating }) => {
  let dotStyle = styles.dot;
  let count = 0;

  switch (rating) {
    case RatingTypes.bad:
      dotStyle += ` ${styles.bad}`;
      count = 1;
      break;

    case RatingTypes.good:
      dotStyle += ` ${styles.good}`;
      count = 2;
      break;
    case RatingTypes.excellent:
      dotStyle += ` ${styles.excellent}`;
      count = 3;
      break;

    default:
      break;
  }

  return (
    <div className={styles.dots}>
      {Array(count)
        .fill(0)
        .map(() => (
          <div className={dotStyle}></div>
        ))}
    </div>
  );
};

export default RatingDots;

import { FC } from 'react';
import { RatingTypes } from '../Rating';
import styles from './RatingStatus.module.scss';

type RatingStatusProps = {
  rating: RatingTypes;
};

const RatingStatus: FC<RatingStatusProps> = ({ rating }) => {
  let ratingStyle = styles.status;
  let title = '';

  switch (rating) {
    case RatingTypes.bad:
      ratingStyle += ` ${styles.bad}`;
      title = 'Плохо';
      break;

    case RatingTypes.good:
      ratingStyle += ` ${styles.good}`;
      title = 'Хорошо';
      break;
    case RatingTypes.excellent:
      ratingStyle += ` ${styles.excellent}`;
      title = 'Отлично';
      break;

    default:
      break;
  }

  return <div className={ratingStyle}>{title}</div>;
};

export default RatingStatus;

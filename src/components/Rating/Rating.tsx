import { FC } from 'react';
import RatingDots from './RatingDots';
import RatingStatus from './RatingStatus';
import styles from './Rating.module.scss';

export enum RatingTypes {
  bad = 'bad',
  good = 'good',
  excellent = 'excellent',
}

type RatingProps = {
  rating: RatingTypes;
};

const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <div className={styles.rating}>
      <RatingDots rating={rating} />
      <RatingStatus rating={rating} />
    </div>
  );
};

export default Rating;

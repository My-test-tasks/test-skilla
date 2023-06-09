import { FC } from 'react';
import styles from './CellRating.module.scss';
import { ICall } from '@store/calls/types';
import Button, { ButtonSizes, ButtonTypes } from '@components/Button';
import Rating, { RatingTypes } from '@components/Rating/Rating';

type CellRatingProps = Pick<ICall, 'errors'>;

const CellRating: FC<CellRatingProps> = ({ errors }) => {
  let rating;

  const isErrors = errors.length !== 0;

  if (isErrors) {
    rating = <span className={styles.script}>{errors}</span>;
  } else {
    const rnd = Math.random();

    if (rnd > 0.2) {
      rating = <Rating rating={RatingTypes.bad} />;
    }

    if (rnd > 0.4) {
      rating = <Rating rating={RatingTypes.good} />;
    }

    if (rnd > 0.6) {
      rating = <Rating rating={RatingTypes.excellent} />;
    }

    if (rnd > 0.8) {
      rating = (
        <Button variant={ButtonTypes.secondary} size={ButtonSizes.small}>
          Распознать
        </Button>
      );
    }
  }

  return <td className={styles.cell}>{rating}</td>;
};

export default CellRating;

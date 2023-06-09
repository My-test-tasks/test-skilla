import { FC } from 'react';
import { ReactComponent as ArrowIcon } from '@assets/icons/arrow_down.svg';
import styles from './Filter.module.scss';

export enum FilterOptions {
  type = 'type',
  operator = 'operator',
  call = 'call',
  source = 'source',
  rating = 'rating',
  error = 'error',
}

type FilterProps = {
  option: FilterOptions;
};

const Filter: FC<FilterProps> = ({ option }) => {
  return (
    <div className={styles.select}>
      <span>{option}</span>
      <ArrowIcon />
    </div>
  );
};

export default Filter;

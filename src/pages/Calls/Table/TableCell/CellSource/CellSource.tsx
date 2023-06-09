import { FC } from 'react';
import { ICall } from '@store/calls/types';
import styles from './CellSource.module.scss';

type CellSourceProps = Pick<ICall, 'source'>;

const CellSource: FC<CellSourceProps> = ({ source }) => {
  return <td className={styles.cell}>{source}</td>;
};

export default CellSource;

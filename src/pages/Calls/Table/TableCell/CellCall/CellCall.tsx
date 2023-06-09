import { FC } from 'react';
import styles from './CellCall.module.scss';
import { ICall } from '@store/calls/types';

type CellCallProps = Pick<ICall, 'to_number'>;

const CellCall: FC<CellCallProps> = ({ to_number: number }) => {
  return <td className={styles.cell}>{number}</td>;
};

export default CellCall;

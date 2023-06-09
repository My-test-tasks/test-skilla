import { FC } from 'react';
import styles from './CellTime.module.scss';
import { ICall } from '@store/calls/types';

type CellTimeProps = Pick<ICall, 'date'>;

const CellTime: FC<CellTimeProps> = ({ date }) => {
  const hours = new Date(date).getHours().toString().padStart(2, '0');
  const minutes = new Date(date).getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;

  return <td className={styles.cell}>{time}</td>;
};

export default CellTime;

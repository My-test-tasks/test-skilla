import { FC } from 'react';
import { ICall } from '@store/calls/types';
import styles from './CellDuration.module.scss';
import Player from '@components/Player/Player';

type CellDurationProps = Pick<ICall, 'time' | 'record'> & { showPlayer: boolean };

const CellDuration: FC<CellDurationProps> = ({ time, record, showPlayer }) => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (time - +minutes * 60).toString().padStart(2, '0');
  const convertedTime = `${minutes}: ${seconds}`;

  return (
    <td>
      <div className={styles.cell}>
        {showPlayer && time !== 0 && <Player record={record} />}
        {showPlayer && time === 0 && convertedTime}
        {!showPlayer && convertedTime}
      </div>
    </td>
  );
};

export default CellDuration;

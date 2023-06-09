import { FC } from 'react';
import { ICall } from '@store/calls/types';

type CellDurationProps = Pick<ICall, 'time' | 'record'>;

const CellDuration: FC<CellDurationProps> = ({ time, record }) => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (time - +minutes * 60).toString().padStart(2, '0');
  const convertedTime = `${minutes}: ${seconds}`;

  return <td>{convertedTime}</td>;
};

export default CellDuration;

import { FC } from 'react';
import { ICall } from '@store/calls/types';

type CellSourceProps = Pick<ICall, 'source'>;

const CellSource: FC<CellSourceProps> = ({ source }) => {
  return <td>{source}</td>;
};

export default CellSource;

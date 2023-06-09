import { FC } from 'react';
import call_01 from '@assets/icons/call_01.svg';
import call_02 from '@assets/icons/call_02.svg';
import call_03 from '@assets/icons/call_03.svg';
import { ICall } from '@store/calls/types';

type CellTypeProps = Pick<ICall, 'in_out'>;

const CellType: FC<CellTypeProps> = ({ in_out: type }) => {
  let icon;

  switch (type) {
    case 0:
      icon = call_02;
      break;

    case 1:
      icon = call_01;
      break;

    default:
      icon = call_03;
      break;
  }

  return (
    <td>
      <img src={icon} alt='icon' />
    </td>
  );
};

export default CellType;

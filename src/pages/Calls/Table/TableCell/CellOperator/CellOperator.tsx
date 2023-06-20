import { FC } from 'react';
import { ICall } from '@store/calls/types';
import avatar_01 from '@assets/avatars/avatar_01.png';
import avatar_02 from '@assets/avatars/avatar_02.png';
import avatar_03 from '@assets/avatars/avatar_03.png';
import seed from '@utils/seed';

type CellOperator = Pick<ICall, 'id'>;

const CellOperator: FC<CellOperator> = ({ id }) => {
  let avatar = avatar_03;
  const rnd = seed(id);

  if (rnd() > 0.33333) {
    avatar = avatar_01;
  }

  if (rnd() > 0.66666) {
    avatar = avatar_02;
  }

  return (
    <td>
      <img src={avatar} alt='avatar' />
    </td>
  );
};

export default CellOperator;

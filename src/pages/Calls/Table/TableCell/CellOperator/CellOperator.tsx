import avatar_01 from '@assets/avatars/avatar_01.png';
import avatar_02 from '@assets/avatars/avatar_02.png';
import avatar_03 from '@assets/avatars/avatar_03.png';

const CellOperator = () => {
  let avatar = avatar_03;
  const rnd = Math.random();

  if (rnd > 0.33333) {
    avatar = avatar_01;
  }

  if (rnd > 0.66666) {
    avatar = avatar_02;
  }

  return (
    <td>
      <img src={avatar} alt='avatar' />
    </td>
  );
};

export default CellOperator;

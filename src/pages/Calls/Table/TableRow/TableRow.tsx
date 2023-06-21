import { FC, useState } from 'react';
import { ICall } from '@store/calls/types';
import CellCheckbox from '../TableCell/CellCheckbox/CellCheckbox';
import CellType from '../TableCell/CellType/CellType';
import CellOperator from '../TableCell/CellOperator/CellOperator';
import CellTime from '../TableCell/CellTime/CellTime';
import CellCall from '../TableCell/CellCall/CellCall';
import CellSource from '../TableCell/CellSource/CellSource';
import CellRating from '../TableCell/CellRating/CellRating';
import CellDuration from '../TableCell/CellDuration/CellDuration';

type TableRowProps = {
  call: ICall;
};

const TableRow: FC<TableRowProps> = ({ call }) => {
  const [isHover, setIsHover] = useState(false);

  const mouseEnterHandler = () => {
    setIsHover(true);
  };

  const mouseLeaveHandler = () => {
    setIsHover(false);
  };

  return (
    <tr key={call.id} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <CellCheckbox checkbox={isHover} />
      <CellType in_out={call.in_out} />
      <CellTime date={call.date} />
      <CellOperator id={call.id} />
      <CellCall to_number={call.from_number} />
      <CellSource source={call.source} />
      <CellRating id={call.id} errors={call.errors} />
      <CellDuration time={call.time} record={call.record} showPlayer={isHover} />
    </tr>
  );
};

export default TableRow;

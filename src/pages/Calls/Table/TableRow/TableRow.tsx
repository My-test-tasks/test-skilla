import { FC } from 'react';
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
  return (
    <tr key={call.id}>
      <CellCheckbox />
      <CellType in_out={call.in_out} />
      <CellTime date={call.date} />
      <CellOperator />
      <CellCall to_number={call.from_number} />
      <CellSource source={call.source} />
      <CellRating errors={call.errors} />
      <CellDuration time={call.time} record={call.record} />
    </tr>
  );
};

export default TableRow;

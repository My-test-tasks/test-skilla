import { FC, useEffect } from 'react';
import { ICall } from '@store/calls/types';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { fetchRecordRequest } from '@store/record/actions';

type PlayerProps = Pick<ICall, 'record'>;

const Player: FC<PlayerProps> = ({ record: recordId }) => {
  const { blob } = useAppSelector((state) => state.record);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecordRequest({ recordId }));
  }, [dispatch, recordId]);

  return <>{blob && <audio controls src={URL.createObjectURL(blob)}></audio>}</>;
};

export default Player;

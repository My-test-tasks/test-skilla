import { useAppSelector } from '@store/hooks';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import styles from './Table.module.scss';
import TableFooter from './TableFooter';

const Table = () => {
  const { calls } = useAppSelector((state) => state.calls);

  return (
    <table className={styles.table}>
      <TableHeader />

      <tbody>
        {calls.map((call) => (
          <TableRow key={call.id} call={call} />
        ))}
      </tbody>

      <TableFooter />
    </table>
  );
};

export default Table;

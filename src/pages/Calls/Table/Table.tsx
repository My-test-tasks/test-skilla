import { useAppSelector } from '@store/hooks';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import styles from './Table.module.scss';
import TableFooter from './TableFooter';

const Table = () => {
  const { calls } = useAppSelector((state) => state.calls);

  return (
    <table className={styles.table}>
      <colgroup>
        <col className={styles['column-1']} />
        <col className={styles['column-2']} />
        <col className={styles['column-3']} />
        <col className={styles['column-4']} />
        <col className={styles['column-5']} />
        <col className={styles['column-6']} />
        <col className={styles['column-7']} />
        <col className={styles['column-8']} />
      </colgroup>

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

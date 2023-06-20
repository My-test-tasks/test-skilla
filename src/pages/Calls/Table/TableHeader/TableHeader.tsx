import styles from './TableHeader.module.scss';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th className={styles.checkbox}>
          <input type='checkbox'></input>
        </th>
        <th>Тип</th>
        <th>Время</th>
        <th>Сотрудник</th>
        <th>Звонок</th>
        <th>Источник</th>
        <th>Оценка</th>
        <th>Длительность</th>
      </tr>
    </thead>
  );
};

export default TableHeader;

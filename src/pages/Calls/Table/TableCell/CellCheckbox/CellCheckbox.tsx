import { FC } from 'react';
import styles from './CellCheckbox.module.scss';

type CellCheckboxProps = {
  checkbox: boolean;
};

const CellCheckbox: FC<CellCheckboxProps> = ({ checkbox }) => {
  return <td className={styles.cell}>{checkbox && <input type='checkbox' className={styles.checkbox}></input>}</td>;
};

export default CellCheckbox;

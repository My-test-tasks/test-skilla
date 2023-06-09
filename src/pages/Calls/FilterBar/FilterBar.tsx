import Filter, { FilterOptions } from './Filter';
import styles from './FilterBar.module.scss';

const FilterBar = () => {
  return (
    <div className={styles.bar}>
      <Filter option={FilterOptions.type} />
      <Filter option={FilterOptions.operator} />
      <Filter option={FilterOptions.call} />
      <Filter option={FilterOptions.source} />
      <Filter option={FilterOptions.rating} />
      <Filter option={FilterOptions.error} />
    </div>
  );
};

export default FilterBar;

import Menu from '@components/Menu';
import Calls from '@pages/Calls';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Menu />
      <Calls />
    </div>
  );
};

export default App;

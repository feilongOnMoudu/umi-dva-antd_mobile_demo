import styles from './index.css';
import {NavBar,Icon} from 'antd-mobile';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <NavBar
        mode="light"
      >NavBar</NavBar>
      {props.children}
    </div>
  );
}

export default BasicLayout;

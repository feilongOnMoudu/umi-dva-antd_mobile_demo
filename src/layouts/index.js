import styles from './index.css';
import Nav from './Nav';
import Tab from './Tab'

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <Nav/>
      <Tab/>
      {props.children}
    </div>
  );
}

export default BasicLayout;

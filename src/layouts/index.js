import styles from './index.css';
import Nav from './Nav';
import Tab from './Tab'
import withRouter from 'umi/withRouter';

function BasicLayout({location,children}) {
  return (
    <div className={styles.normal} >
      <Nav location={location}/>
      <Tab pathname={location.pathname}>{children}</Tab>
    </div>
  );
}

export default withRouter(BasicLayout);

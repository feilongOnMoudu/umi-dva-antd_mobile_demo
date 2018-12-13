import styles from './index.css';
import Tab from './Tab'
import withRouter from 'umi/withRouter';

function BasicLayout({location,children}) {
  return (
    <div className={styles.normal} >
      
      <Tab pathname={location.pathname}>{children}</Tab>
      {children}
    </div>
  );
}

export default withRouter(BasicLayout);

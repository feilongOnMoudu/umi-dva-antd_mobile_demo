import { Button, TabBar } from 'antd-mobile';
import { connect } from 'dva';
import Home from './home/index';
import Redirect from 'umi/redirect';

export default () => {
  return (
    //重定向
    <Redirect to="/home" />
  );
}



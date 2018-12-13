import { Button, TabBar } from 'antd-mobile';
import { Component } from 'react';
import { connect } from 'dva';
import Nav from '../../layouts/Nav';
import PropTypes from 'prop-types';

class Home extends Component {
  render () {
    const { showLeftButton,navTitile } = this.props;
    function onLeftClick () {
      console.log(1111);
    }

    return (
        <Nav onLeftClick={onLeftClick} showLeftButton={true} navTitile='111'>

        </Nav>
    )
  }
}

export default connect()(Home);



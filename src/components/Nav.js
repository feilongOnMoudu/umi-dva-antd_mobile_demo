import {NavBar,Icon} from 'antd-mobile';
import Link from 'umi/link';
import PropTypes from 'prop-types';

function Nav (props) {
    return (
        <NavBar
        mode="light"
        icon={!props.showLeftButton ? '':  <Icon type="left" />  }
        onLeftClick={!props.showLeftButton ? null : props.onLeftClick}
      >{props.navTitile}</NavBar>
    );
}

export default Nav;

Nav.defaultProps = {
    showLeftButton: false,
    navTitile:''
  };
  
  Nav.propTypes = {
    showLeftButton: PropTypes.bool,
    navTitile:  PropTypes.string,
    onLeftClick: PropTypes.func.isRequired
  };
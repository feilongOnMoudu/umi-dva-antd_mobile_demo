import {NavBar,Icon} from 'antd-mobile';
import Link from 'umi/link';

function Nav ({location}) {
    return (
        <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
      >NavBar</NavBar>
    );
}


export default Nav;
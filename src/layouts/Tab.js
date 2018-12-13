import {TabBar} from 'antd-mobile';
import Link from 'umi/link';
import router from 'umi/router';
import PropTypes from 'prop-types';
import { Component } from 'react';


const tabbarData = [
    {
        title:'首页',
        icon:'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' ,
        selectedIcon:'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
        link:'/home',
    },
    {
        title:'我的',
        icon:'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' ,
        selectedIcon:'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
        link:'/users',
    }
];

export default class Tab extends Component {
    render() {
        const {showTab,children,pathname} = this.props;
        return (
            <div style={{height:'100%',position:'fixed',width:'100%',bottom:'0'}}>
            <TabBar hidden={showTab}>
                {tabbarData.map(({ title, icon, selectedIcon, link }) => (
                    <TabBar.Item
                        key={link}
                        title={title}
                        icon={tabIcon(icon)}
                        selectedIcon={tabIcon(selectedIcon)}
                        selected={pathname === link}
                        onPress={() => router.push(`${link}`)}
                    >
                        {/* 匹配到的children路由进行渲染 */}
                        {children.props.location.pathname === link && children}
                    </TabBar.Item>
                ))}
            </TabBar>
            </div>
        )
    }
}

const tabIcon = (icon) => {
    return (
        <div style={{
            width: '22px',
            height: '22px',
            background: icon }}
          />
    )
}

Tab.defaultProps = {
    isMenubar: false,
    children: null,
    pathname: '/',
};
  
Tab.propTypes = {
    isMenubar: PropTypes.bool,
    children: PropTypes.node,
    pathname: PropTypes.string,
};
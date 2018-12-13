import {Carousel, WingBlank,Button, TabBar ,Flex,WhiteSpace} from 'antd-mobile';
import { Component } from 'react';
import { connect } from 'dva';
import Nav from '../../components/Nav';
import PropTypes from 'prop-types';

class Home extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  
  render () {
    function onLeftClick () {
      console.log(111);
    }

    return (
      <div>
        <Nav onLeftClick={onLeftClick} showLeftButton navTitile='111' />
        <Flex direction='column' align='start'>
        
          
 
         <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://goss.veer.com/creative/vcg/veer/800water/veer-142444097.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
         
 
         
         
      
          


         <Flex.Item>
         <WingBlank><h1>666666</h1></WingBlank>
         </Flex.Item>

        
        </Flex>
        


      </div>
       
    )
  }
}

export default connect()(Home);



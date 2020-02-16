import React, { Component } from 'react';
import './button.css';

export default class Button extends Component {
  constructor(props) {
    super();
    this.state = {
      active: false,
      deltaX: 0,
      deltaY: 0,
    };
    // 获取button节点
    this.myRef = React.createRef();
  }
  render() {
    return (
      //在button元素里面使用ref等于外面的myRef, 就可以在元素外面使用这个元素了。
      <button ref={this.myRef} className="button2" onClick={this.x.bind(this)}>
        <span className="value">{this.props.value}</span>
        {
          this.state.active === true ? (
            <span 
              className="circle"
              onAnimationEnd={this.y.bind(this)}
              style={{ left: this.state.deltaX, top: this.state.deltaY }}
            ></span>
          ) : (
            ""
          )
        }
      </button>
    );
  }
  x(event){
    let {x, y} = this.myRef.current.getBoundingClientRect();
    let {clientX, clientY } = event;
    let deltaX = clientX - x -5;
    let deltaY = clientY - y -5;
    this.setState({
      active: true,
      deltaX: deltaX,
      deltaY: deltaY,
    });
    console.log('里面的函数');
    this.props.onClick && this.props.onClick.call(null, 'BingGo');
  }
  y(){
    this.setState({
      active: false,
    });
  }
}
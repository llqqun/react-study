import React, { useState, useEffect } from 'react';

// 函数组件中使用State (Hooks方式)
function StateHookDemo() {
  // 声明一个新的状态变量
  const [count, setCount] = useState(0);
  
  return (
    <div className="state-hook-demo">
      <h3>函数组件中的State (Hooks)</h3>
      <p>你点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>
        点击我
      </button>
    </div>
  );
}

// 类组件中使用State
class StateClassDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      date: new Date()
    };
  }
  
  // 组件挂载后开始计时
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    console.log('计时器已启动');
  }
  
  // 组件卸载前清除计时器
  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log('计时器已清除');
  }
  
  // 更新时间
  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  // 更新计数
  handleClick = () => {
    // 使用函数形式的setState确保获取最新状态
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }
  
  render() {
    return (
      <div className="state-class-demo">
        <h3>类组件中的State与生命周期</h3>
        <p>当前时间: {this.state.date.toLocaleTimeString()}</p>
        <p>你点击了 {this.state.count} 次</p>
        <button onClick={this.handleClick}>
          点击我
        </button>
      </div>
    );
  }
}

// 函数组件中模拟生命周期 (使用useEffect)
function LifecycleHookDemo() {
  const [count, setCount] = useState(0);
  const [isOnline, setIsOnline] = useState(true);
  
  // 相当于 componentDidMount 和 componentDidUpdate
  useEffect(() => {
    // 更新文档标题
    document.title = `你点击了 ${count} 次`;
    console.log('标题已更新');
    
    // 返回清理函数，相当于 componentWillUnmount
    return () => {
      document.title = 'React App';
      console.log('组件将卸载，标题已重置');
    };
  }, [count]); // 仅当count更改时更新
  
  return (
    <div className="lifecycle-hook-demo">
      <h3>函数组件中模拟生命周期 (useEffect)</h3>
      <p>你点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>
        点击我
      </button>
      <p>
        <button onClick={() => setIsOnline(!isOnline)}>
          {isOnline ? '设置离线' : '设置在线'}
        </button>
      </p>
      <p>状态: {isOnline ? '在线 🟢' : '离线 🔴'}</p>
    </div>
  );
}

function StateDemo() {
  return (
    <div className="demo-container">
      <h2>State与生命周期示例</h2>
      
      <div className="demo-section">
        <StateHookDemo />
      </div>
      
      <div className="demo-section">
        <StateClassDemo />
      </div>
      
      <div className="demo-section">
        <LifecycleHookDemo />
      </div>
    </div>
  );
}

export default StateDemo;
import React from 'react';

// 函数组件示例
function Welcome(props) {
  return <h1>你好, {props.name}</h1>;
}

// 类组件示例
class WelcomeClass extends React.Component {
  render() {
    return <h1>你好, {this.props.name}</h1>;
  }
}

// 组合组件示例
function PropsDemo() {
  return (
    <div className="demo-container">
      <h2>组件与Props示例</h2>
      <div className="demo-section">
        <h3>基础Props传递</h3>
        <Welcome name="小明" />
        <Welcome name="小红" />
        <Welcome name="小刚" />
        <WelcomeClass name="类组件示例" />
      </div>
      
      <div className="demo-section">
        <h3>复杂Props传递</h3>
        {/* Props传递对象数据 */}
        <UserInfo user={{name: '张三', age: 25, role: '开发者'}} />
      </div>
    </div>
  );
}

// 接收复杂props的组件
function UserInfo(props) {
  const { name, age, role } = props.user;
  return (
    <div className="user-info">
      <h3>用户信息</h3>
      <p>姓名: {name}</p>
      <p>年龄: {age}</p>
      <p>角色: {role}</p>
    </div>
  );
}

export default PropsDemo;
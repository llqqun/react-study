import React, { useState } from 'react';

// 函数组件示例
// React 组件是常规的 JavaScript 函数，但 组件的名称必须以大写字母开头，否则它们将无法运行！
function Welcome(props) {
  return <h1>你好, {props.name}</h1>;
}

// 类组件示例
class WelcomeClass extends React.Component {
  render() {
    return <h1>你好, {this.props.name}</h1>;
  }
}

function DemoCom() {
  return <div>测试组件</div>;
}

// 组合组件示例
function PropsDemo() {
  // 普通变量 - 修改不会触发重新渲染
  let test = 1;
  // 状态变量 - 修改会触发重新渲染
  let [num, setCount] = useState(1);
  let [line, setLineCount] = useState(0);
  const lineBox = [];
  for (let i = 0; i < line; i++) {
    const item = <div key={i}>第{i}行</div>;
    lineBox.push(item);
  }
  return (
    <div className="demo-container">
      <h2>组件与Props示例</h2>
      <div className="demo-section">
        <p>{test}</p>
        <button onClick={() => (test += 1)}>{`${test} 按钮`}</button>
        <Welcome name="小明" />
        <Welcome name="小红" />
        <Welcome name="小刚" />
        <WelcomeClass name="类组件示例" />
      </div>

      <div className="demo-section">
        <h3>复杂Props传递</h3>
        {/* Props传递对象数据 */}
        <UserInfo user={{ name: '张三', age: 25, role: '开发者' }} />
      </div>

      <div className="demo-section">
        <h3>基础语法if</h3>
        <div>{num}</div>
        <div>{num % 2 > 0 && <div className="alert">奇数</div>}</div>
        <div>{num % 2 === 0 && <div className="alert">偶数</div>}</div>
        <button onClick={() => setCount(num + 1)}>改变数字</button>
        {num % 2 === 0 && <DemoCom />}
        {num % 2 === 0 ? <DemoCom /> : null}
        {(() => {
          if (num % 2 > 0) return <div>if判断显示渲染</div>;
        })()}
      </div>

      <div className="demo-section">
        <h3>基础语法for</h3>
        <p>行数{line}</p>
        <button onClick={() => setLineCount(line + 1)}>增加行数</button>
        <button onClick={() => setLineCount(line - 1)}>减少行数</button>
        <div>{lineBox}</div>
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

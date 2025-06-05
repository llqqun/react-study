import React, { useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback } from 'react';

// 创建Context
const ThemeContext = React.createContext('light');

// useReducer示例的reducer函数
function counterReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

// useState Hook示例
function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: '', age: 0 });
  
  return (
    <div className="use-state-demo">
      <h3>useState Hook</h3>
      <p>计数器: {count}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
      <button onClick={() => setCount(0)}>重置</button>
      
      <div>
        <h4>对象状态</h4>
        <input 
          value={user.name} 
          onChange={(e) => setUser({...user, name: e.target.value})} 
          placeholder="姓名" 
        />
        <input 
          type="number" 
          value={user.age} 
          onChange={(e) => setUser({...user, age: parseInt(e.target.value) || 0})} 
          placeholder="年龄" 
        />
        <p>用户信息: {user.name}, {user.age}岁</p>
      </div>
    </div>
  );
}

// useEffect Hook示例
function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [resourceType, setResourceType] = useState('posts');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // 每次渲染后执行
  useEffect(() => {
    console.log('渲染完成');
  });
  
  // 仅在count变化时执行
  useEffect(() => {
    document.title = `点击了 ${count} 次`;
    console.log('标题已更新');
  }, [count]);
  
  // 仅在resourceType变化时执行
  useEffect(() => {
    console.log(`资源类型变为: ${resourceType}`);
    // 这里可以添加数据获取逻辑
  }, [resourceType]);
  
  // 组件挂载时添加事件监听，卸载时移除
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 空依赖数组表示仅在挂载和卸载时执行
  
  return (
    <div className="use-effect-demo">
      <h3>useEffect Hook</h3>
      <p>点击次数: {count}</p>
      <button onClick={() => setCount(count + 1)}>点击</button>
      
      <div>
        <h4>资源类型切换</h4>
        <button onClick={() => setResourceType('posts')}>文章</button>
        <button onClick={() => setResourceType('users')}>用户</button>
        <button onClick={() => setResourceType('comments')}>评论</button>
        <p>当前资源: {resourceType}</p>
      </div>
      
      <div>
        <h4>窗口大小监听</h4>
        <p>窗口宽度: {windowWidth}px</p>
      </div>
    </div>
  );
}

// useContext Hook示例
function UseContextDemo() {
  const [theme, setTheme] = useState('light');
  
  return (
    <div className="use-context-demo">
      <h3>useContext Hook</h3>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        切换主题
      </button>
      
      <ThemeContext.Provider value={theme}>
        <ThemedButton />
      </ThemeContext.Provider>
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  const style = {
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#333',
    padding: '10px 15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    margin: '10px 0'
  };
  
  return (
    <div>
      <button style={style}>
        我是{theme === 'dark' ? '深色' : '浅色'}主题按钮
      </button>
      <p>当前主题: {theme}</p>
    </div>
  );
}

// useReducer Hook示例
function UseReducerDemo() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div className="use-reducer-demo">
      <h3>useReducer Hook</h3>
      <p>计数: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>增加</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>减少</button>
      <button onClick={() => dispatch({ type: 'reset' })}>重置</button>
    </div>
  );
}

// useRef Hook示例
function UseRefDemo() {
  const [renderCount, setRenderCount] = useState(0);
  const inputRef = useRef(null);
  const prevInputValue = useRef('');
  const [inputValue, setInputValue] = useState('');
  
  // 跟踪渲染次数 - 修复无限循环问题
  const renderCountRef = useRef(1);
  useEffect(() => {
    // 只在组件挂载时设置一次初始值
    setRenderCount(renderCountRef.current);
    
    // 在后续渲染中只更新ref，不更新state
    return () => {
      renderCountRef.current = renderCountRef.current + 1;
    };
  }, []); // 添加空依赖数组，只在挂载和卸载时执行
  
  // 或者更好的方案：在特定操作后手动更新计数
  const updateRenderCount = () => {
    renderCountRef.current = renderCountRef.current + 1;
    setRenderCount(renderCountRef.current);
  };
  
  // 保存前一个输入值
  useEffect(() => {
    prevInputValue.current = inputValue;
  }, [inputValue]);
  
  // 聚焦输入框
  const focusInput = () => {
    inputRef.current.focus();
    // 在用户交互时更新渲染计数
    updateRenderCount();
  };
  
  return (
    <div className="use-ref-demo">
      <h3>useRef Hook</h3>
      <p>组件已渲染 {renderCount} 次</p>
      
      <div>
        <input 
          ref={inputRef} 
          value={inputValue} 
          onChange={(e) => {
            setInputValue(e.target.value);
            // 在输入变化时更新渲染计数
            updateRenderCount();
          }} 
          placeholder="输入一些文字" 
        />
        <button onClick={focusInput}>聚焦输入框</button>
        <p>当前值: {inputValue}</p>
        <p>上一个值: {prevInputValue.current}</p>
      </div>
    </div>
  );
}

// useMemo和useCallback Hook示例
function UseMemoCallbackDemo() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  
  // 使用useMemo缓存计算结果
  const doubleNumber = useMemo(() => {
    console.log('计算doubleNumber');
    return slowFunction(number);
  }, [number]);
  
  // 使用useMemo缓存对象
  const themeStyles = useMemo(() => ({
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333',
    padding: '10px 15px',
    borderRadius: '4px',
  }), [dark]);
  
  // 使用useCallback缓存函数
  const handleClick = useCallback(() => {
    console.log(`当前数字: ${number}`);
  }, [number]);
  
  return (
    <div className="use-memo-callback-demo">
      <h3>useMemo & useCallback Hooks</h3>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)} 
      />
      <button onClick={() => setDark(!dark)}>
        切换主题
      </button>
      
      <div style={themeStyles}>
        <p>原始数字: {number}</p>
        <p>加倍后: {doubleNumber}</p>
      </div>
      
      <ChildComponent handleClick={handleClick} />
    </div>
  );
}

// 模拟耗时计算
function slowFunction(num) {
  console.log('运行耗时函数...');
  // 模拟耗时操作
  for (let i = 0; i < 1000000; i++) {}
  return num * 2;
}

// 子组件，用于演示useCallback
function ChildComponent({ handleClick }) {
  console.log('子组件渲染');
  return (
    <button onClick={handleClick}>子组件按钮</button>
  );
}

function HooksDemo() {
  return (
    <div className="demo-container">
      <h2>React Hooks详解</h2>
      
      <div className="demo-section">
        <UseStateDemo />
      </div>
      
      <div className="demo-section">
        <UseEffectDemo />
      </div>
      
      <div className="demo-section">
        <UseContextDemo />
      </div>
      
      <div className="demo-section">
        <UseReducerDemo />
      </div>
      
      <div className="demo-section">
        <UseRefDemo />
      </div>
      
      <div className="demo-section">
        <UseMemoCallbackDemo />
      </div>
    </div>
  );
}

export default HooksDemo;
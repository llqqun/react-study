import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

const APIDemo = () => {
  // useState示例
  const [count, setCount] = useState(0);
  
  // useEffect示例
  useEffect(() => {
    document.title = `点击了 ${count} 次`;
    return () => {
      document.title = 'React应用';
    };
  }, [count]);
  
  // useRef示例
  const inputRef = useRef(null);
  
  // useMemo示例
  const expensiveCalculation = useMemo(() => {
    console.log('执行复杂计算');
    return count * 2;
  }, [count]);
  
  // useCallback示例
  const handleClick = useCallback(() => {
    console.log('按钮点击');
    setCount(prev => prev + 1);
  }, []);
  
  return (
    <div className="api-demo">
      <h1>React核心API详解</h1>
      
      <section>
        <h2>useState</h2>
        <p>用于在函数组件中添加状态管理</p>
        <div>
          <p>当前计数: {count}</p>
          <button onClick={() => setCount(count + 1)}>增加</button>
        </div>
      </section>
      
      <section>
        <h2>useEffect</h2>
        <p>用于处理副作用操作，如数据获取、订阅、手动DOM操作等</p>
        <p>当前页面标题已被修改为显示计数</p>
      </section>
      
      <section>
        <h2>useRef</h2>
        <p>用于访问DOM节点或存储可变值</p>
        <input ref={inputRef} placeholder="点击按钮聚焦" />
        <button onClick={() => inputRef.current.focus()}>聚焦输入框</button>
      </section>
      
      <section>
        <h2>useMemo</h2>
        <p>用于优化性能，缓存计算结果</p>
        <p>计算值: {expensiveCalculation}</p>
      </section>
      
      <section>
        <h2>useCallback</h2>
        <p>用于优化性能，缓存函数引用</p>
        <button onClick={handleClick}>点击我 (使用useCallback)</button>
      </section>
    </div>
  );
};

export default APIDemo;
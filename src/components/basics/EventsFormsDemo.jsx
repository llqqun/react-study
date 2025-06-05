import React, { useState } from 'react';

// 基础事件处理
function EventHandlingDemo() {
  const [isToggleOn, setIsToggleOn] = useState(true);
  
  // 方法1：使用箭头函数
  const handleClick1 = () => {
    setIsToggleOn(!isToggleOn);
  };
  
  // 方法2：使用bind
  function handleClick2() {
    setIsToggleOn(!isToggleOn);
  }
  
  return (
    <div className="event-handling-demo">
      <h3>事件处理示例</h3>
      <button onClick={handleClick1}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
      <button onClick={handleClick2.bind(this)}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
      {/* 方法3：内联箭头函数 */}
      <button onClick={() => setIsToggleOn(!isToggleOn)}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

// 表单处理
function FormHandlingDemo() {
  // 单个表单元素状态
  const [name, setName] = useState('');
  
  // 多个表单元素状态
  const [formState, setFormState] = useState({
    email: '',
    message: '',
    topic: 'react'
  });
  
  // 处理单个输入变化
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  
  // 处理多个输入变化
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  
  // 处理表单提交
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`提交的数据：\n姓名: ${name}\n邮箱: ${formState.email}\n留言: ${formState.message}\n主题: ${formState.topic}`);
  };
  
  return (
    <div className="form-handling-demo">
      <h3>表单处理示例</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            姓名:
            <input 
              type="text" 
              value={name} 
              onChange={handleNameChange} 
            />
          </label>
        </div>
        <div>
          <label>
            邮箱:
            <input 
              type="email" 
              name="email" 
              value={formState.email} 
              onChange={handleFormChange} 
            />
          </label>
        </div>
        <div>
          <label>
            留言:
            <textarea 
              name="message" 
              value={formState.message} 
              onChange={handleFormChange} 
            />
          </label>
        </div>
        <div>
          <label>
            主题:
            <select 
              name="topic" 
              value={formState.topic} 
              onChange={handleFormChange}
            >
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="hooks">Hooks</option>
            </select>
          </label>
        </div>
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

function EventsFormsDemo() {
  return (
    <div className="demo-container">
      <h2>事件处理与表单示例</h2>
      
      <div className="demo-section">
        <EventHandlingDemo />
      </div>
      
      <div className="demo-section">
        <FormHandlingDemo />
      </div>
    </div>
  );
}

export default EventsFormsDemo;
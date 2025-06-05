import React, { useState, useEffect } from 'react';

function TodoApp() {
  // 从localStorage获取初始todos或使用空数组
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  
  // 保存todos到localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  // 添加新任务
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInput('');
  };
  
  // 切换任务完成状态
  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  // 删除任务
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  // 清除已完成任务
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };
  
  // 根据过滤条件显示任务
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all'
  });
  
  // 计算未完成任务数量
  const activeTodoCount = todos.filter(todo => !todo.completed).length;
  
  return (
    <div className="todo-app">
      <h2>Todo 应用</h2>
      
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="添加新任务..."
        />
        <button type="submit">添加</button>
      </form>
      
      <div className="filters">
        <button 
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          全部
        </button>
        <button 
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'active' : ''}
        >
          未完成
        </button>
        <button 
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          已完成
        </button>
      </div>
      
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>删除</button>
          </li>
        ))}
      </ul>
      
      <div className="todo-footer">
        <span>{activeTodoCount} 项未完成</span>
        {todos.some(todo => todo.completed) && (
          <button onClick={clearCompleted}>清除已完成</button>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
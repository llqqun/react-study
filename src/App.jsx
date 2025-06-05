import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import './App.css';

// 导入基础组件示例
import PropsDemo from './components/basics/PropsDemo';
import StateDemo from './components/basics/StateDemo';
import EventsFormsDemo from './components/basics/EventsFormsDemo';

// 导入进阶组件示例
import HooksDemo from './components/advanced/HooksDemo';
import RouterDemo from './components/advanced/RouterDemo';
import ConfigurationDemo from './components/advanced/ConfigurationDemo';

// 导入项目示例
import TodoApp from './components/projects/TodoApp';

// 首页组件
function Home() {
  return (
    <div className="home-container">
      <h1>React 学习项目</h1>
      <p>这是一个用于学习React的项目，包含了多个示例和教程。</p>
      <p>请从左侧菜单选择一个主题开始学习。</p>

      <div className="learning-path">
        <h2>学习路径</h2>
        <ol>
          <li>组件与Props - 了解React组件的基本概念和属性传递</li>
          <li>State与生命周期 - 学习组件状态管理和生命周期方法</li>
          <li>事件处理与表单 - 掌握React中的事件处理和表单控制</li>
          <li>React Hooks - 深入学习React的Hooks API</li>
          <li>路由与状态管理 - 了解页面路由和应用状态管理</li>
          <li>Todo应用 - 综合运用所学知识构建一个完整应用</li>
        </ol>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <div className="logo">React学习</div>
          <ul>
            <li>
              <Link to="/">首页</Link>
            </li>
            <li className="nav-section">基础知识</li>
            <li>
              <Link to="/props">组件与Props</Link>
            </li>
            <li>
              <Link to="/state">State与生命周期</Link>
            </li>
            <li>
              <Link to="/events-forms">事件处理与表单</Link>
            </li>
            <li className="nav-section">进阶知识</li>
            <li>
              <Link to="/hooks">React Hooks详解</Link>
            </li>
            <li>
              <Link to="/router">路由与状态管理</Link>
            </li>
            <li>
              <Link to="/configuration">React框架配置</Link>
            </li>
            <li className="nav-section">实战项目</li>
            <li>
              <Link to="/todo">Todo应用</Link>
            </li>
          </ul>
        </nav>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/props" element={<PropsDemo />} />
            <Route path="/state" element={<StateDemo />} />
            <Route path="/events-forms" element={<EventsFormsDemo />} />
            <Route path="/hooks" element={<HooksDemo />} />
            <Route path="/router" element={<RouterDemo />} />
            <Route path="/configuration" element={<ConfigurationDemo />} />
            <Route path="/todo" element={<TodoApp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

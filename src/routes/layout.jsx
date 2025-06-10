import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app-container">
      <nav className="sidebar">
        <div className="logo">React学习</div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/props">组件与Props</Link></li>
          <li><Link to="/state">State与生命周期</Link></li>
          <li><Link to="/events-forms">事件处理与表单</Link></li>
          <li><Link to="/hooks">React Hooks详解</Link></li>
          <li><Link to="/router">路由与状态管理</Link></li>
          <li><Link to="/configuration">React框架配置</Link></li>
          <li><Link to="/todo">Todo应用</Link></li>
          <li><Link to="/api">React API详解</Link></li>
        </ul>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
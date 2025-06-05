import React from 'react';
import { Routes, Route, Link, useParams, useNavigate, Outlet } from 'react-router-dom';

// 首页组件
function Home() {
  return (
    <div>
      <h2>首页</h2>
      <p>这是React Router示例的首页</p>
    </div>
  );
}

// 关于页面
function About() {
  return (
    <div>
      <h2>关于我们</h2>
      <p>这是一个学习React Router的示例项目</p>
    </div>
  );
}

// 用户列表页面
function Users() {
  return (
    <div>
      <h2>用户列表</h2>
      <ul>
        <li>
          <Link to="/router/users/1">用户 1</Link>
        </li>
        <li>
          <Link to="/router/users/2">用户 2</Link>
        </li>
        <li>
          <Link to="/router/users/3">用户 3</Link>
        </li>
      </ul>
      <Outlet /> {/* 嵌套路由的渲染位置 */}
    </div>
  );
}

// 用户详情页面
function UserDetail() {
  let { userId } = useParams();
  let navigate = useNavigate();
  
  return (
    <div>
      <h3>用户详情: {userId}</h3>
      <p>这是用户 {userId} 的详细信息页面</p>
      <button onClick={() => navigate('/router/users')}>返回用户列表</button>
      <button onClick={() => navigate(-1)}>返回上一页</button>
    </div>
  );
}

// 404页面
function NotFound() {
  return (
    <div>
      <h2>404 - 页面未找到</h2>
      <p>抱歉，您请求的页面不存在。</p>
      <Link to="/router">返回Router示例首页</Link>
    </div>
  );
}

function RouterDemo() {
  return (
    <div className="demo-container">
      <h2>React Router示例</h2>
      
      <div className="router-demo">
        <nav>
          <ul>
            <li>
              <Link to="/router">Router首页</Link>
            </li>
            <li>
              <Link to="/router/about">关于</Link>
            </li>
            <li>
              <Link to="/router/users">用户</Link>
            </li>
            <li>
              <Link to="/router/nonexistent">不存在的页面</Link>
            </li>
          </ul>
        </nav>
        
        <hr />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<UserDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default RouterDemo;
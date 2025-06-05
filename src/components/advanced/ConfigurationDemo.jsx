import React from 'react';

function ConfigurationDemo() {
  return (
    <div className="tutorial-container">
      <h1>React框架配置详解</h1>
      
      <section>
        <h2>1. Create React App配置</h2>
        <p>
          Create React App (CRA)是React官方推荐的创建单页应用的工具，它提供了一个零配置的现代构建设置。
        </p>
        
        <h3>1.1 默认配置</h3>
        <p>CRA默认包含以下配置：</p>
        <ul>
          <li>Webpack - 模块打包器</li>
          <li>Babel - JavaScript编译器</li>
          <li>ESLint - 代码检查工具</li>
          <li>Jest - 测试框架</li>
          <li>PostCSS - CSS处理工具</li>
        </ul>
        
        <h3>1.2 自定义配置方法</h3>
        <p>有几种方法可以自定义CRA的配置：</p>
        
        <h4>方法一：使用package.json</h4>
        <pre>
{`{
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  },
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"]
  }
}`}
        </pre>
        
        <h4>方法二：使用CRACO (Create React App Configuration Override)</h4>
        <p>CRACO允许您自定义CRA配置而无需eject：</p>
        <ol>
          <li>安装CRACO：<code>npm install @craco/craco --save-dev</code></li>
          <li>创建<code>craco.config.js</code>文件在项目根目录</li>
          <li>修改package.json中的scripts：</li>
        </ol>
        <pre>
{`{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
  }
}`}
        </pre>
        <pre>
{`// craco.config.js
module.exports = {
  webpack: {
    alias: {
      '@': require('path').resolve(__dirname, 'src')
    },
    plugins: [
      // 添加额外的webpack插件
    ]
  },
  jest: {
    // 自定义Jest配置
  },
  devServer: {
    // 自定义开发服务器配置
  }
}`}
        </pre>
        
        <h4>方法三：Eject</h4>
        <p>
          运行<code>npm run eject</code>会将所有配置文件暴露出来，让您完全控制配置。
          <strong>注意：</strong>这是一个不可逆操作，一旦eject就无法回退。
        </p>
      </section>
      
      <section>
        <h2>2. 环境变量配置</h2>
        <p>React应用可以使用环境变量来管理不同环境的配置：</p>
        
        <h3>2.1 内置环境变量</h3>
        <ul>
          <li><code>NODE_ENV</code>: 在开发环境为'development'，生产环境为'production'</li>
          <li><code>PUBLIC_URL</code>: 指向public文件夹的URL</li>
        </ul>
        
        <h3>2.2 自定义环境变量</h3>
        <p>创建以下文件来设置环境变量：</p>
        <ul>
          <li><code>.env</code>: 默认环境变量</li>
          <li><code>.env.development</code>: 开发环境变量</li>
          <li><code>.env.production</code>: 生产环境变量</li>
          <li><code>.env.local</code>: 本地环境变量（优先级高）</li>
        </ul>
        <p>所有自定义环境变量必须以<code>REACT_APP_</code>开头：</p>
        <pre>
# .env.development
REACT_APP_API_URL=https://dev-api.example.com
REACT_APP_DEBUG=true
        </pre>
        <p>在代码中使用环境变量：</p>
        <pre>
const apiUrl = process.env.REACT_APP_API_URL;
console.log(process.env.REACT_APP_DEBUG);
        </pre>
      </section>
      
      <section>
        <h2>3. 路由配置</h2>
        <p>使用React Router进行路由配置：</p>
        
        <h3>3.1 基本路由配置</h3>
        <pre>
{`import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}`}
        </pre>
        
        <h3>3.2 嵌套路由</h3>
        <pre>
{`<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="*" element={<NotFound />} />
  </Route>
</Routes>`}
        </pre>
        <p>在Layout组件中使用<code>&lt;Outlet /&gt;</code>来渲染子路由。</p>
        
        <h3>3.3 路由配置对象</h3>
        <p>可以使用配置对象来定义路由，使路由结构更清晰：</p>
        <pre>
{`const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: '*', element: <NotFound /> }
    ]
  }
];

// 使用useRoutes钩子
function App() {
  const element = useRoutes(routes);
  return element;
}`}
        </pre>
      </section>
      
      <section>
        <h2>4. 状态管理配置</h2>
        
        <h3>4.1 Context API配置</h3>
        <pre>
{`// ThemeContext.js
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}`}
        </pre>
        
        <h3>4.2 Redux配置</h3>
        <p>使用Redux Toolkit简化Redux配置：</p>
        <pre>
{`// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

// index.js
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);`}
        </pre>
      </section>
      
      <section>
        <h2>5. 性能优化配置</h2>
        
        <h3>5.1 代码分割</h3>
        <p>使用动态import实现代码分割：</p>
        <pre>
{`import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}`}
        </pre>
        
        <h3>5.2 Webpack Bundle分析</h3>
        <p>使用source-map-explorer分析打包结果：</p>
        <ol>
          <li>安装：<code>npm install source-map-explorer --save-dev</code></li>
          <li>添加脚本：<code>"analyze": "source-map-explorer 'build/static/js/*.js'"</code></li>
          <li>构建项目：<code>npm run build</code></li>
          <li>分析：<code>npm run analyze</code></li>
        </ol>
      </section>
      
      <section>
        <h2>6. 测试配置</h2>
        
        <h3>6.1 Jest配置</h3>
        <p>在package.json中自定义Jest配置：</p>
        <pre>
{`"jest": {
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts"
  ],
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  "setupFilesAfterEnv": [
    "<rootDir>/src/setupTests.js"
  ]
}`}
        </pre>
        
        <h3>6.2 Testing Library配置</h3>
        <p>在setupTests.js中配置Testing Library：</p>
        <pre>
{`// setupTests.js
import '@testing-library/jest-dom';

// 自定义匹配器
import { configure } from '@testing-library/react';

configure({
  testIdAttribute: 'data-testid',
  asyncUtilTimeout: 5000
});`}
        </pre>
      </section>
    </div>
  );
}

export default ConfigurationDemo;
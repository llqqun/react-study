import { RouterProvider, createBrowserRouter } from 'react-router';

// 导入所有组件
import PropsDemo from '../components/basics/PropsDemo';
import StateDemo from '../components/basics/StateDemo';
import EventsFormsDemo from '../components/basics/EventsFormsDemo';
import HooksDemo from '../components/advanced/HooksDemo';
import RouterDemo from '../components/advanced/RouterDemo';
import ConfigurationDemo from '../components/advanced/ConfigurationDemo';
import TodoApp from '../components/projects/TodoApp';
import APIDemo from '../components/advanced/APIDemo';
// 布局组件
import Layout from './layout';
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
// 路由配置数据
const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        name: '首页'
      },
      {
        path: '/props',
        element: <PropsDemo />,
        name: '组件与Props'
      },
      {
        path: '/state',
        element: <StateDemo />,
        name: 'State与生命周期'
      },
      {
        path: '/events-forms',
        element: <EventsFormsDemo />,
        name: '事件处理与表单'
      },
      {
        path: '/hooks',
        element: <HooksDemo />,
        name: 'React Hooks详解'
      },
      {
        path: '/router',
        element: <RouterDemo />,
        name: '路由与状态管理'
      },
      {
        path: '/configuration',
        element: <ConfigurationDemo />,
        name: 'React框架配置'
      },
      {
        path: '/todo',
        element: <TodoApp />,
        name: 'Todo应用'
      },
      {
        path: '/api',
        element: <APIDemo />,
        name: 'React API详解'
      }
    ]
  }
];



const router = createBrowserRouter(routes);

const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRoutes;


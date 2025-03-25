import { RouteObject } from "react-router";
import MyLayout from "../layout/MyLayout.tsx";
import FatherView from "../views/fatherView.tsx";
import List from "../views/list.tsx";
import Login from "../views/login.tsx";
import User from "../views/user.tsx";

// 全局路由配置
const routes: RouteObject[] = [
  {
    path: "/",
  },
  {
    path: "/login",
    element: <Login />,
    action: true,
  },
  {
    element: <MyLayout />,
    children: [
      {
        path: "/list",
        element: <List />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/father",
        element: <FatherView />,
      },
    ],
  },
];

export default routes;

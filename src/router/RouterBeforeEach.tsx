import { useEffect } from "react";
import { RouteObject, useLocation, useNavigate } from "react-router";
import routes from ".";
import { useUserInfoStore } from "../stores/userStore";

export function RouterBeforeEach({ children }: { children?: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = useUserInfoStore((state) => state.userInfo);
  const getCurrentInfo = useUserInfoStore((state) => state.getCurrentInfo);

  const currentRouter = getCurrentRouterMap(routes, location.pathname);

  useEffect(() => {
    if (userInfo?.id) {
      // 判断权限
    } else {
      // 没有id, 先尝试获取当前用户信息, 成功放行, 不成功跳转登录页
      getCurrentInfo().catch(() => {
        navigate("/login");
      });
    }
  }, [userInfo?.id, currentRouter.path, navigate, getCurrentInfo]);
  return children;
}

const getCurrentRouterMap = (routers: RouteObject[], path: string): RouteObject => {
  for (const router of routers) {
    if (router.path == path) return router;
    if (router.children) {
      const childRouter = getCurrentRouterMap(router.children, path);
      if (childRouter) return childRouter;
    }
  }
  return routes[routes.length - 1];
};

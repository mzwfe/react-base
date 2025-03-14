import { useEffect } from "react";
import { RouteObject, useLocation, useNavigate } from "react-router";
import routes from ".";
import { useUserInfoStore } from "../stores/userStore";

export function RouterBeforeEach({ children }: { children?: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo = useUserInfoStore((state) => state.userInfo);
  const currentRouter = getCurrentRouterMap(routes, location.pathname);

  useEffect(() => {
    if (!userInfo?.id && currentRouter.path !== "login") {
      navigate("/login");
    }
  }, [userInfo?.id, currentRouter.path, navigate]);
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

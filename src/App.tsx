import React from "react";
import { useRoutes } from "react-router";
import { Loading } from "./components/loading.tsx";
import routes from "./router/index.tsx";
import { RouterBeforeEach } from "./router/RouterBeforeEach.tsx";

// 使用useRoutes生成路由元素
function App() {
  const routeElement = useRoutes(routes);

  return (
    <React.Suspense fallback={<Loading />}>
      <RouterBeforeEach>{routeElement}</RouterBeforeEach>
    </React.Suspense>
  );
}

export default App;

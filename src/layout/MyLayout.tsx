import { Layout, Menu, MenuProps } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "list",
    key: "list",
  },
  {
    label: "user",
    key: "user",
  },
  {
    label: "father",
    key: "father",
  },
];

function MyLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const [current, setCurrent] = useState(location.pathname.split("/")[1]);
  const onClick: MenuProps["onClick"] = (e) => {
    setTimeout(() => {
      setCurrent(e.key);
      navigate("/" + e.key);
    }, 200);
  };

  return (
    <Layout>
      <Header>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </Header>
      <Content style={{ fontSize: "20px" }}>
        <Outlet></Outlet>
      </Content>
    </Layout>
  );
}

export default MyLayout;

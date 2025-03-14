import { Button, Form, FormInstance, Input } from "antd";
import { createRef, useState } from "react";
import { useNavigate } from "react-router";
import { loginXHR } from "../service";
import { useUserInfoStore } from "../stores/userStore";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const formRef = createRef<FormInstance>();
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);
  const login = async () => {
    await formRef.current?.validateFields();
    try {
      const res = await loginXHR(username, password);
      setUserInfo(res);
      navigate("/list");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="container" style={{ height: "100%", padding: "180px", display: "flex", justifyContent: "center" }}>
      <Form ref={formRef} name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }} initialValues={{ remember: true }} autoComplete="off">
        <Form.Item<FieldType> label="Username" name="username" rules={[{ required: true, message: "Please input your username!" }]}>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Item>

        <Form.Item<FieldType> label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" onClick={login}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;

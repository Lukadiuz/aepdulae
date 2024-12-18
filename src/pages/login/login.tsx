import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import Buttons from "../../components/buttons/Buttons";

interface LoginProps {}
const { Title } = Typography;

const Login: React.FC<LoginProps> = ({}) => {
  let navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    localStorage.setItem("user", JSON.stringify(values));
    return navigate("/");
  };
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row ">
      <div className="flex md:w-1/2 justify-center items-center mt-20 md:mt-0">
        <img
          src="https://www.aepdulae.com/images/logo.jpg"
          className="w-2/3"
          alt="Logo"
        />
      </div>
      <div className="md:w-1/2">
        <div className="flex items-center justify-center h-auto md:min-h-screen bg-white md:bg-gray-100 mt-20 sm:mt-0">
          {/* <div className="w-full sm:w-2/3 lg:none max-w-md p-8 bg-white rounded-2xl shadow-md "> */}
          <div className="rounded-2xl p-8 max-w-[380px] bg-white shadow-xl w-2/3 sm:w-2/3 lg:w-1/2 xl:w-1/2 xl:bg-white">
            <Title level={3} className="text-center mb-6 text-gray-700">
              Login
            </Title>
            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
              initialValues={{
                email: "test@techconsbiz.com",
                password: "password",
              }}
            >
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "The input is not valid E-mail!" },
                ]}
              >
                <Input placeholder="email" className="rounded-lg" />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Password" className="rounded-lg" />
              </Form.Item>
              <Form.Item>
                <Buttons type="theme" htmlType="submit">
                  Login
                </Buttons>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

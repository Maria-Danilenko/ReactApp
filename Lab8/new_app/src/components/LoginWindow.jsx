import React, { useState } from 'react';
import { Modal, Form, Input, Button, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function LoginModal({ show, onClose, onLogin }) {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleLogin = async () => {
    onLogin()
    onClose()
  };

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      handleLogin();
      setLoading(false);
    }, 2000);
    form.resetFields();
  };

  return (
    <Modal open={show} onCancel={onClose} footer={null} title="Login">
      <Spin spinning={loading}>
        <Form onFinish={onFinish} layout="vertical" form={form}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
}
export default LoginModal;
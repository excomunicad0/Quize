import { ROUTES } from '@/app/router/routes';
import { signIn } from '@/entities/user';
import { selectUserLoading, useAppDispatch, useAppSelector } from '@/shared/hooks/reduxhooks';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';


export const SignInForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const loading = useAppSelector(selectUserLoading);

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const resultAction = await dispatch(signIn(values));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error('Sign in failed:', error);
    }
  };

  return (
    <Form
      name="signin"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Пожалуйста, введите вашу почту!' }]}
      >
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Введите свою почту'
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Пожалуйста, введите ваш пароль!' }]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Введите свой пароль'
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" disabled={loading}>
          {loading ? 'Выполняется...' : 'Войти'}
        </Button>
      </Form.Item>
    </Form>
  );
};


export default SignInForm
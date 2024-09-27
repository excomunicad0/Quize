
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { selectUserLoading, useAppDispatch, useAppSelector } from '@/shared/hooks/reduxhooks';
import { signUp } from '@/entities/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { ROUTES } from '@/app/router/routes';
import { Button, Form, Input } from 'antd';


export const SignUpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector(selectUserLoading);

  const handleSubmit = async (values: { name: string; email: string; password: string }) => {
    try {
      const resultAction = await dispatch(signUp(values));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  };

  return (
    <Form
      name="signup"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Имя"
        name="name"
        rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}
      >
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Введите свое имя'
        />
      </Form.Item>

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
        label="Пароль"
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
          {loading ? 'Выполняется...' : 'Зарегистрироваться'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;

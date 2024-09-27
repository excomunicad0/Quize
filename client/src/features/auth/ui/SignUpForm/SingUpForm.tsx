import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import {
  selectUserLoading,
  useAppDispatch,
  useAppSelector,
} from '@/shared/hooks/reduxhooks';
import { signUp } from '@/entities/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { ROUTES } from '@/app/router/routes';
import { Button, Form, Input } from 'antd';
import styles from './SignUpForm.module.css';

export const SignUpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector((state) => state.user.loading);

  

  const handleSubmit = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const resultAction = await dispatch(signUp(values));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  };

  return (
    <div className={styles.container}>
      <Form
        name='signup'
        className={styles.form}
        onFinish={handleSubmit}
        autoComplete='off'
      >
        <Form.Item
          label='Имя'
          name='name'
          className={styles.formItem}
          rules={[{ required: true, message: 'Пожалуйста, введите ваше имя!' }]}
        >
          <Input
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Введите свое имя'
          />
        </Form.Item>

        <Form.Item
          label='Email'
          name='email'
          className={styles.formItem}
          rules={[
            { required: true, message: 'Пожалуйста, введите вашу почту!' },
          ]}
        >
          <Input
            className={styles.input}
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Введите свою почту'
          />
        </Form.Item>

        <Form.Item
          label='Пароль'
          name='password'
          className={styles.formItem}
          rules={[
            { required: true, message: 'Пожалуйста, введите ваш пароль!' },
          ]}
        >
          <Input.Password
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Введите свой пароль'
          />
        </Form.Item>

        <Form.Item className={styles.formItem}>
          <Button
            className={styles.button}
            type='primary'
            htmlType='submit'
            disabled={loading}
          >
            {loading ? 'Выполняется...' : 'Зарегистрироваться'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;

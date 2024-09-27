import { ROUTES } from '@/app/router/routes';
import { signIn } from '@/entities/user';
import {
  selectUserLoading,
  useAppDispatch,
  useAppSelector,
} from '@/shared/hooks/reduxhooks';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import styles from './SignInFrom.module.css';

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
    <div className={styles.container}>
      <Form
        className={styles.form}
        name='signin'
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete='off'
      >
        <Form.Item
          className={styles.formItem}
          label='Email'
          name='email'
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
          className={styles.formItem}
          label='Пароль'
          name='password'
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

        <Form.Item className={styles.buttonContainer}>
          <Button
            className={styles.button}
            type='primary'
            htmlType='submit'
            disabled={loading}
          >
            {loading ? 'Выполняется...' : 'Войти'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignInForm;

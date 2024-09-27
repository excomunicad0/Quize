
import { useNavigate } from 'react-router-dom';
// import styles from './SignUpForm.module.css';
import React, { useState } from 'react';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
import { selectUserLoading, useAppDispatch, useAppSelector } from '@/shared/hooks/reduxhooks';
// import { useForm, SubmitHandler } from 'react-hook-form';
import { signUp } from '@/entities/user';
import { unwrapResult } from '@reduxjs/toolkit';
import { ROUTES } from '@/app/router/routes';
import { Button, Form, Input } from 'antd';


// interface IFormInputs {
//   name: string;
//   email: string;
//   password: string;
// }

// const schema = yup
// .object({
//   name: yup.string().required('Username is required'),
//   email: yup.string().email('Invalid email format').required('Email is required'),
//   password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// })
// .required()

// export const SignUpForm: React.FC = () => {
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();
//   const loading = useAppSelector(selectUserLoading);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid },
//     getValues,
//   } = useForm<IFormInputs>({
//     resolver: yupResolver(schema),
//     mode: 'onChange',
//   });

//   const onSubmit: SubmitHandler<IFormInputs> = async ({
//     name,
//     email,
//     password,
//   }) => {
//     try {
//     const resultAction = await dispatch(
//       signUp({ name, email, password })
//     );
//     unwrapResult(resultAction);
//     navigate(ROUTES.HOME);
//   } catch (error) {
//     console.log(error);
//   };
//   }

//   const getStatusIcon = (fieldName: keyof IFormInputs) => {
//     if (errors[fieldName]) {
//       return <span className={styles.icon}>🔴</span>;
//     }
//     if (getValues()[fieldName] && !errors[fieldName]) {
//       return <span className={styles.icon}>✅</span>;
//     }
//     return null;
//   };

//     return (
//       <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
//         <div className={styles.inputContainer}>
//           <label className={styles.label}>* Имя</label>
//           <div className={styles.inputWithIcon}>
//             <input
//               className={styles.input}
//               placeholder='Введите свое имя'
//               {...register('name')}
//             />
//             {getStatusIcon('name')}
//           </div>
//           {errors.name && (
//             <p className={styles.error}>{errors.name.message}</p>
//           )}
//         </div>
  
//         <div className={styles.inputContainer}>
//           <label className={styles.label}>* Почта</label>
//           <div className={styles.inputWithIcon}>
//             <input
//               className={styles.input}
//               placeholder='Введите свою почту'
//               {...register('email')}
//             />
//             {getStatusIcon('email')}
//           </div>
//           {errors.email && <p className={styles.error}>{errors.email.message}</p>}
//         </div>
  
//         <div className={styles.inputContainer}>
//           <label className={styles.label}>* Пароль</label>
//           <div className={styles.inputWithIcon}>
//             <input
//               className={styles.input}
//               placeholder='Введите свой пароль'
//               type='password'
//               {...register('password')}
//             />
//             {getStatusIcon('password')}
//           </div>
//           {errors.password && (
//             <p className={styles.error}>{errors.password.message}</p>
//           )}
//         </div>
  
//         <button
//           className={styles.button}
//           type='submit'
//           disabled={!isValid || loading}
//         >
//           {loading ? 'Выполняется...' : 'Регистрация'}
//         </button>
//       </form>
//     );
//   };





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

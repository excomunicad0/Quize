import { ROUTES } from '@/app/router/routes';
import { signIn } from '@/entities/user';
import { selectUserLoading, useAppDispatch, useAppSelector } from '@/shared/hooks/reduxhooks';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



export const SignInForm: React.FC = () => {
const dispatch = useAppDispatch()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()
const loading = useAppSelector(selectUserLoading)

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const resultAction = await dispatch(signIn({ email, password }));
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
        console.error('Sign in failed:', error);
    }
}


return (
<form onSubmit={handleSubmit}>
    <label>
      Email:
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </label>
    <label>
      Password:
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </label>
    <button type='submit' disabled={loading}>
      {loading ? 'Выполняется...' : 'Войти'}
    </button>
  </form>
    )
  };

export default SignInForm
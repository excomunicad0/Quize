import { SignUpForm } from '@/features/auth/ui/SignUpForm/SingUpForm';
import styles from './SignUpPage.module.css';
export function SignUpPage() {
  return (
    <div className={styles.container}>
      <SignUpForm />
    </div>
  );
}
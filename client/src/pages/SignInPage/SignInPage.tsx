import { SignInForm } from '@/features/auth/ui/SignInForm/SignInForm';
import styles from './SignInPage.module.css';
export function SignInPage() {
  return (
    <div className={styles.container}>
      <SignInForm />
    </div>
  );
}
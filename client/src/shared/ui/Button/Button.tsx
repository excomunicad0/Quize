import type { ButtonHTMLAttributes } from 'react';
import './Button.css';

// eslint-disable-next-line react-refresh/only-export-components
export enum ThemeButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
}

type ButtonProps = {
  theme: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps): JSX.Element {
  const { theme, children, ...otherProps } = props;
  return (
    <button className={`Button ${theme}`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
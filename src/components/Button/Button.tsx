import { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

export enum ButtonTypes {
  primary = 'primary',
  secondary = 'secondary',
  light = 'light',
}
export enum ButtonSizes {
  normal = 'normal',
  small = 'small',
}

type ButtonProps = PropsWithChildren<{
  type?: ButtonTypes;
  size?: ButtonSizes;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  type = ButtonTypes.primary,
  size = ButtonSizes.normal,
  children,
  ...attributes
}) => {
  attributes.className += ` ${styles.button} ${styles[type]} ${styles[size]}`;

  return <button {...attributes}>{children}</button>;
};

export default Button;

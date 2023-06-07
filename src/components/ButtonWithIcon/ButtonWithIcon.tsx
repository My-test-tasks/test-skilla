import { FC, ButtonHTMLAttributes } from 'react';
import addIcon from '@assets/icons/add.svg';
import payIcon from '@assets/icons/pay.svg';
import styles from './ButtonWithIcon.module.scss';

export enum ButtonWithIconTypes {
  add = 'add',
  pay = 'pay',
}

type ButtonWithIconProps = {
  variant?: ButtonWithIconTypes;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonWithIcon: FC<ButtonWithIconProps> = ({ variant = ButtonWithIconTypes.add, ...attributes }) => {
  attributes.className += ` ${styles.button} ${styles[variant]}`;

  const isAdd = variant === ButtonWithIconTypes.add;
  const text = isAdd ? 'Добавить заказ' : 'Оплата';
  const icon = isAdd ? addIcon : payIcon;

  return (
    <button {...attributes}>
      <span>{text}</span>
      <img src={icon} alt='icon' />
    </button>
  );
};

export default ButtonWithIcon;

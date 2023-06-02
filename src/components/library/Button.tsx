import React, { PropsWithChildren } from 'react';
import { Icon, IconType } from './Icon';

interface IconButtonProps
  extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  icon?: IconType;
  loading?: boolean;
  variant?: keyof typeof variants | false;
}

const variants = {
  active: `bg-amber-300 hover:bg-amber-400`,
  ghost: ``,
  red: `bg-red-300 hover:bg-red-400`,
  green: `bg-green-300 hover:bg-green-400`,
  violet: `bg-indigo-500 hover:bg-indigo-600`,
  default: `bg-neutral-100 hover:bg-neutral-200 dark:text-neutral-100 dark:bg-neutral-600 hover:dark:bg-neutral-500 transition-colors `,
};
export const Button: React.FC<IconButtonProps> = ({
  variant,
  loading,
  icon,
  className,
  children,
  ...rest
}) => (
  <button
    type={'button'}
    className={
      `${
        variants[variant || 'default']
      } center h-10 min-w-[40px] space-x-2 rounded-md p-2 transition-colors` +
      ' ' +
      className
    }
    disabled={loading}
    {...rest}
  >
    {icon && !loading && (
      <Icon icon={icon} className={children ? 'mr-2' : ''} />
    )}
    {loading && (
      <Icon
        icon={'loader'}
        className={`${children ? 'mr-2' : ''} animate-spin`}
      />
    )}
    {children}
  </button>
);

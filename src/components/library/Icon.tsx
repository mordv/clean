import {
  TbAlertTriangleFilled,
  TbArrowRight,
  TbAssembly,
  TbCalculator,
  TbCircuitCell,
  TbClock,
  TbCpu,
  TbDashboard,
  TbEdit,
  TbEyeFilled,
  TbFlame,
  TbLayoutDashboard,
  TbList,
  TbLoader,
  TbMoon,
  TbPlus,
  TbQuestionMark,
  TbSend,
  TbSun,
  TbTrash,
  TbTriangleFilled,
  TbX,
} from 'react-icons/tb';
import React from 'react';
import { match } from 'ts-pattern';
import { IconBaseProps } from 'react-icons';

export const icons = [
  'arrowRight',
  'assembly',
  'trash',
  'warn',
  'circuit',
  'loader',
  'question',
  'eye',
  'editor',
  'projects',
  'dashboard',
  'fire',
  'mcu',
  'light',
  'send',
  'dark',
  'electricalComponent',
  'tasks',
  'close',
  'plus',
  'state',
  'play',
] as const;
export type IconType = (typeof icons)[number];

const Icons = {
  arrowRight: TbArrowRight,
  electricalComponent: TbCalculator,
  tasks: TbClock,
  assembly: TbAssembly,
  projects: TbLayoutDashboard,
  send: TbSend,
  dashboard: TbDashboard,
  editor: TbEdit,
  warn: TbAlertTriangleFilled,
  mcu: TbCpu,
  circuit: TbCircuitCell,
  state: TbList,
  light: TbSun,
  close: TbX,
  play: TbTriangleFilled,
  dark: TbMoon,
  fire: TbFlame,
  question: TbQuestionMark,
  eye: TbEyeFilled,
  trash: TbTrash,
  loader: TbLoader,
  plus: TbPlus,
} satisfies Record<IconType, React.FC>;

interface IconProps extends IconBaseProps {
  icon: IconType;
  color?: string;
  className?: string;
}
export const Icon: React.FC<IconProps> = ({
  icon,
  className = '',
  color,
  ...rest
}) => {
  const Component = Icons[icon];
  const modifiers = match(icon)
    .returnType<string>()
    .with('play', () => 'rotate-90')
    .with('send', () => 'rotate-45')
    .otherwise(() => '');
  return (
    <Component
      className={className + ` ${modifiers}`}
      size={'1.1em'}
      color={color}
      {...rest}
    />
  );
};

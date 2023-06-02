import React from 'react';
import { useActions, useAppStore } from '../state/state';
import { Button } from './library/Button';

export const Counter: React.FC = () => {
  const { inc, dec } = useActions();
  const counter = useAppStore((s) => s.counter);

  return (
    <div className={'flex w-full items-center justify-between'}>
      <Button onClick={dec} variant={`red`}>
        -
      </Button>
      <div className={'center px-2 min-w-[100px] max-w-[100px]'}>
        <div>{counter}</div>
      </div>
      <Button onClick={inc} variant={`green`}>
        +
      </Button>
    </div>
  );
};

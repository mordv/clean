import React from 'react';
import { countAtomApi } from '../state/state';
import { Button } from './library/Button';
import { useAtom } from 'jotai';

export const Counter: React.FC = () => {
  const [count, countActions] = useAtom(countAtomApi);

  return (
    <div className={'flex w-full items-center justify-between'}>
      <Button onClick={() => countActions('dec')} variant={`red`}>
        -
      </Button>
      <div className={'center px-2 min-w-[100px] max-w-[100px]'}>
        <div>{count}</div>
      </div>
      <Button onClick={() => countActions('inc')} variant={`green`}>
        +
      </Button>
    </div>
  );
};

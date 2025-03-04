import React from 'react';
import { countAtomApi } from '@/state/state';
import { useAtom } from 'jotai';
import { Button } from '@/components/ui/button';

export const Counter: React.FC = () => {
  const [count, countActions] = useAtom(countAtomApi);

  return (
    <div className={'flex w-full items-center justify-between'}>
      <Button
        onClick={() => countActions('dec')}
        size={'icon'}
        variant={`default`}
      >
        -
      </Button>
      <div className={'center px-2 min-w-[100px] max-w-[100px]'}>
        <div>{count}</div>
      </div>
      <Button
        onClick={() => countActions('inc')}
        size={'icon'}
        variant={`default`}
      >
        +
      </Button>
    </div>
  );
};

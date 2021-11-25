import React from 'react';
import { AppState, useAppStore } from '../state/state';
import shallow from 'zustand/shallow';
import { Button, Center, Flex } from '@chakra-ui/react';

const selector = ({ dec, inc, counter }: AppState) => ({ dec, inc, counter });

export const Counter: React.VFC = () => {
  const { counter, inc, dec } = useAppStore(selector, shallow);

  return (
    <Flex width={`f`} justifyContent={`space-between`} alignItems={`center`}>
      <Button onClick={dec} colorScheme={`red`}>
        -
      </Button>
      <Center px={2} minW={`100px`} maxW={`100px`}>
        <div>{counter}</div>
      </Center>
      <Button onClick={inc} colorScheme={`green`}>
        +
      </Button>
    </Flex>
  );
};

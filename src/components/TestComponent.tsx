import React from 'react';
import { Text } from '@chakra-ui/react';

interface TestComponentProps {
  name: string;
}

export const TestComponent: React.FC<TestComponentProps> = ({ name }) => <Text userSelect={`none`}>{name}</Text>;

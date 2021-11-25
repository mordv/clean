import React from 'react';
import { theme } from './styles/theme';
import { AppRoutes } from './routes/AppRoutes';
import { Center, ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { globalStyles } from './styles/global';

export const App: React.VFC = () => (
  <ChakraProvider theme={theme}>
    <Global styles={globalStyles} />
    <Center w={`full`} h={`full`}>
      <AppRoutes />
    </Center>
  </ChakraProvider>
);

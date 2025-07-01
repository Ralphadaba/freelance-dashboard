'use client';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { ReactNode } from 'react';
import theme from './theme';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </>
  );
}
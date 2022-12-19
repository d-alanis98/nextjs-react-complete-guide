import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
// Styles
import '../styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;

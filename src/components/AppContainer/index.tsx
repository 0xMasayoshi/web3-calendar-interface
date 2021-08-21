import React from 'react';
import {
  Container,
  Flex,
  Spacer,
  Text,
  Image,
  Button
} from '@chakra-ui/react';
import { Header } from '../Header'
import { Footer } from '../Footer'
import Link from 'next/link'

export interface AppContainerProps {
  children?: any;
}

export const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  // get web3 provider
  return (
    <Flex h='100vh' w='100vw' flexDirection='column'>
      <Container centerContent width='100%' >
        <Header>
          <Link href="/" passHref>
            <Image
              src="/raidguild_logo.png"
              alt='raid guild logo'
              htmlWidth="200px"
            />
          </Link>
          <Spacer />
          <Button>Connect</Button>
        </Header>
      </Container>
      {children}
      <Spacer />
      <Footer>
        <Text>Raid Guild Season 2</Text>
      </Footer>
    </Flex>
  );
};

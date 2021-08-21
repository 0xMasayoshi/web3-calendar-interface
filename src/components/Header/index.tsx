import { Flex } from '@chakra-ui/react';

export interface HeaderProps {
  children?: any;
}

export const Header: React.FC<HeaderProps> = ({ children }) => (
  <Flex
    direction={['column', 'row']}
    align='center'
    justify={['space-between', 'center']}
    wrap='wrap'
    w='100vw'
    mb={8}
    p={8}
  >
    {children}
  </Flex>
);
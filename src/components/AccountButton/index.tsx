import React from 'react';

import { Button, Text } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from '../../constants/connectors';

export interface AccountButtonProps {
  children?: any;
}

export const AccountButton: React.FC<AccountButtonProps> = ({ children }) => {
  const { active, activate, deactivate, account } = useWeb3React()

  return active ? (
    <Button
      textStyle='buttonLabel'
      maxW='120px'
      variant={'outline'}
      onClick={() => deactivate()}
    >
      <LinkIcon
        color='primaryAlpha.500'
        onClick={() => deactivate()}
        pr='5px'
      />
      <Text overflow='hidden' textOverflow='ellipsis' isTruncated color='white'>
        {account}
      </Text>
    </Button>
  ) : (
    <Button
      textStyle='buttonLabel'
      maxW='120px'
      variant={'solid'}
      onClick={() => activate(injectedConnector)}
    >
      Connect
      {children}
    </Button>
  );
};

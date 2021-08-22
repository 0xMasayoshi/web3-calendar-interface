import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { AppContainer } from '../components/AppContainer'
import { theme } from '../theme'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'
import React from 'react'

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Web3ReactProvider getLibrary={getLibrary}>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </Web3ReactProvider>
    </ChakraProvider>
  )
}
export default MyApp

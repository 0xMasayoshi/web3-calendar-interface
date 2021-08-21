import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { AppContainer } from '../components/AppContainer'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ChakraProvider>
  )
}
export default MyApp

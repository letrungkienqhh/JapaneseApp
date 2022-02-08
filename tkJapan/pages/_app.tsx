import '../styles/globals.css'

import { useEffect, useState } from 'react'
import Cookie from 'js-cookie'
import AppContext from '../context/AppContext'
import Head from 'next/head'
import  { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'

export default function App({
  Component, pageProps
}:AppProps) {
  return (
    <SessionProvider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      session={pageProps.session}
    >
      <Component {...pageProps} />
    </SessionProvider>
  )
}
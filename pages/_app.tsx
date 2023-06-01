import type { AppProps } from 'next/app'
import '../styles/global.scss'
import { Header } from '@/components/Header'
import { Provider } from 'react-redux'
import { store } from '@/store/reducer/cartReducer'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
      <title>리필드</title>
        <link
          rel="icon"
          type="image/png"
          href="https://s3.ap-northeast-2.amazonaws.com/refilled.co.kr/favicon/symbol_only.png"
          sizes="96x96"
        ></link>
      </Head>
      <Header></Header>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

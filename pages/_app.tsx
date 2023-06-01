import type { AppProps } from 'next/app'
import '../styles/global.scss'
import { Header } from '@/components/Header'
import { Provider } from 'react-redux'
import { store } from '@/store/reducer/cartReducer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

import RootLayout from '@/components/RootLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="font-bodyFont bg-gray-300">
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </div>
    </Provider>
  )
}

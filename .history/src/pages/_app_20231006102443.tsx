import RootLayout from '@/components/RootLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from '@/store/store'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SessionProvide>
          <div className="font-bodyFont bg-gray-300">
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </div>
        </SessionProvide>
      </PersistGate>
    </Provider>
  )
}

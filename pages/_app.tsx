import Loading from '@/components/Loading';
import useWindowSize from '@/hooks/useWindowSize'
import useGlobalStore from '@/stores/useGlobalStore';
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const { innerWidth, innerHeight } = useWindowSize();

  return <div
    className=''
    style={{
      width: innerWidth,
      height: innerHeight,
    }}
  >
    <Loading>
      <Component {...pageProps} />
    </Loading>
  </div>
}

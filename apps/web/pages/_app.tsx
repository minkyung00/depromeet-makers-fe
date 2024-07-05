import type { AppProps } from 'next/app';
import { QueryClientProvider } from '@makers/api';
import { UIProvider } from '@makers/ui';

// import MonitoringInitializer from '@/components/MonitoringInitializer';
// import usePageTrack from '@/hooks/event/usePageTrack';
import { pretendard } from '~/assets/fonts/font';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider>
      {/* <MonitoringInitializer /> */}
      <UIProvider>
        {/* <PageViewTracker /> */}
        <Component {...pageProps} className={pretendard.className} />
      </UIProvider>
    </QueryClientProvider>
  );
}

// const PageViewTracker = () => {
//   usePageTrack();

//   return null;
// };

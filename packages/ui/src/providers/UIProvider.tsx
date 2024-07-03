import type { PropsWithChildren } from 'react';

import Layout from '../components/Layout';

import MotionProvider from './MotionProvider';
import GlobalThemeProvider from './ThemeProvider';

export const UIProvider = ({ children }: PropsWithChildren) => {
  return (
    <GlobalThemeProvider>
      <MotionProvider>
        <Layout>{children}</Layout>
      </MotionProvider>
    </GlobalThemeProvider>
  );
};

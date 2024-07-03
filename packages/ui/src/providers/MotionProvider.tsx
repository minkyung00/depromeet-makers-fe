import type { PropsWithChildren } from 'react';
import { domAnimation, LazyMotion } from 'framer-motion';

const MotionProvider = ({ children }: PropsWithChildren) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default MotionProvider;

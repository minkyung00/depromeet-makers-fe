import React from 'react';
import { BottomNav } from '@makers/ui';

import { USER_NAV_ITEMS } from '~/components/BottomNav/index.constants.ts';
import Prepare from '~/components/Prepare';

function Mypage() {
  return (
    <>
      <Prepare />
      <BottomNav items={USER_NAV_ITEMS} />
    </>
  );
}

export default Mypage;

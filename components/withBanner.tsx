import type { FC } from 'react';

import Banner from '@/components/Common/Banner';
// import { siteConfig } from '@/next.json.mjs';
// import { dateIsBetween } from '@/util/dateUtils';

const WithBanner: FC<{ section: string }> = ({ section }) => {
  return (
    <Banner type={'default'} link={'#'}>
      99
    </Banner>
  );
};

export default WithBanner;

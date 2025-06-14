'use client';

import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { ReactNode, useState } from 'react';

const createEmotionCache = () => createCache({ key: 'css', prepend: true });

export default function EmotionRegistry({ children }: { children: ReactNode }) {
  const [cache] = useState(createEmotionCache);
  return <CacheProvider value={cache}>{children}</CacheProvider>;
}

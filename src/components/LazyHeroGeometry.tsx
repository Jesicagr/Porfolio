'use client';

import dynamic from 'next/dynamic';

const HeroGeometry = dynamic(() => import('@/components/HeroGeometry'), {
  ssr: false,
});

export default function LazyHeroGeometry() {
  return <HeroGeometry />;
}

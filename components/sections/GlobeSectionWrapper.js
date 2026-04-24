'use client';
import dynamic from 'next/dynamic';

const GlobeSection = dynamic(() => import('./GlobeSection'), { ssr: false });

export default function GlobeSectionWrapper() {
  return <GlobeSection />;
}

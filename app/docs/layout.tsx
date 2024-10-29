import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';
import { BackgroundPatterns } from '@/components/background-patterns';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      sidebar={{
        defaultOpenLevel: 1,
      }}
      tree={source.pageTree}
      {...baseOptions}
    >
      <BackgroundPatterns />
      {children}
    </DocsLayout>
  );
}

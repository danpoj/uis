import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'UIs',
  },
  links: [
    {
      text: 'Components',
      url: '/components',
      active: 'nested-url',
    },
  ],

  githubUrl: 'https://github.com/danpoj',
};

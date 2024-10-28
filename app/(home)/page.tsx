'use client';

import { AuroraBackground } from '@/components/aurora-background';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='flex flex-1 flex-col justify-center text-center h-full'>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className='relative flex flex-col gap-4 items-center justify-center px-4 mb-24'
        >
          <h2 className='bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-7xl font-sans relative z-20 font-bold tracking-tight'>
            UIs
          </h2>
          <p className='max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center'>
            references to build web UIs using shadcn.ui
          </p>

          <p className='text-fd-muted-foreground'>
            <Link
              href='/components'
              className='bg-black dark:bg-white rounded w-fit text-white dark:text-black px-4 py-1.5'
            >
              /components
            </Link>{' '}
          </p>
        </motion.div>
      </AuroraBackground>
    </main>
  );
}

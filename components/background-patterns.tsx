export const BackgroundPatterns = () => (
  <svg
    className='absolute inset-0 -z-10 h-[50%] w-full stroke-gray-200 dark:stroke-gray-800 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
    aria-hidden='true'
  >
    <defs>
      <pattern
        id='0787a7c5-978c-4f66-83c7-11c213f99cb7'
        width={40}
        height={40}
        x='50%'
        y={-1}
        patternUnits='userSpaceOnUse'
      >
        <path d='M.5 60V.5H60' fill='none' />
      </pattern>
    </defs>
    <rect
      width='100%'
      height='100%'
      strokeWidth={0}
      fill='url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)'
    />
  </svg>
);

'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export const AvatarGroup = ({
  size,
  avatars,
  className,
  restClassName,
  viewCount = 3,
  isRest = true,
}: {
  size: number;
  avatars: {
    src: string;
    alt?: string;
  }[];
  className?: string;
  viewCount?: number;
  restClassName?: string;
  isRest?: boolean;
}) => {
  return (
    <div className={cn('flex items-center -space-x-3', className)}>
      {isRest && avatars.length > viewCount ? (
        <>
          {avatars.slice(0, viewCount).map((avatar, i) => (
            <Avatar
              key={i}
              src={avatar.src}
              alt={avatar.alt}
              width={size}
              height={size}
            />
          ))}
          <div
            style={{
              width: size,
              height: size,
            }}
            className={cn(
              'rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold z-[1] border',
              restClassName
            )}
          >
            +{avatars.length - viewCount}
          </div>
        </>
      ) : (
        <>
          {avatars.map((avatar, i) => (
            <Avatar
              key={i}
              src={avatar.src}
              alt={avatar.alt}
              width={size}
              height={size}
            />
          ))}
        </>
      )}
    </div>
  );
};

export const Avatar = ({
  className,
  src,
  alt = 'image alt',
  width = 40,
  height = 40,
}: {
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
  src: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      alt={alt}
      src={src}
      className={cn(
        'object-cover duration-500 ease-in-out rounded-full border',
        className,
        isLoading
          ? 'scale-100 blur-[1px] grayscale'
          : 'scale-100 blur-0 grayscale-0'
      )}
      width={width}
      height={height}
      onLoad={() => setIsLoading(false)}
    />
  );
};

import { PreviewCode } from '../preview-code';
import { Avatar, AvatarGroup } from './avatar';

export const Example1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <PreviewCode
      preview={
        <div className='flex items-end gap-1.5'>
          <Avatar
            src='https://avatars.githubusercontent.com/u/9113740?v=4'
            width={34}
            height={34}
          />
          <Avatar src='https://avatars.githubusercontent.com/u/9113740?v=4' />
          <Avatar
            src='https://avatars.githubusercontent.com/u/9113740?v=4'
            width={46}
            height={46}
          />
          <Avatar
            src='https://avatars.githubusercontent.com/u/9113740?v=4'
            width={52}
            height={52}
          />
        </div>
      }
    >
      {children}
    </PreviewCode>
  );
};

export const Example2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <PreviewCode
      preview={
        <>
          <AvatarGroup
            size={40}
            avatars={[
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
            ]}
          />

          <AvatarGroup
            viewCount={4}
            size={40}
            avatars={[
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
            ]}
          />

          <AvatarGroup
            isRest={false}
            size={40}
            avatars={[
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
              {
                src: 'https://avatars.githubusercontent.com/u/9113740?v=4',
              },
            ]}
          />
        </>
      }
    >
      {children}
    </PreviewCode>
  );
};

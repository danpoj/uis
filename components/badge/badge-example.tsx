import { PreviewCode } from '../preview-code';
import { Badge } from './badge';

export const Example1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <PreviewCode
      preview={
        <div className='space-y-10'>
          <div className='flex gap-2'>
            <div className='flex flex-col gap-2'>
              <Badge size='sm'>Default</Badge>
              <Badge variant='gray' size='sm'>
                Gray
              </Badge>
              <Badge variant='blue' size='sm'>
                Blue
              </Badge>
              <Badge variant='purple' size='sm'>
                Purple
              </Badge>
              <Badge variant='amber' size='sm'>
                Amber
              </Badge>
              <Badge variant='red' size='sm'>
                Red
              </Badge>
              <Badge variant='pink' size='sm'>
                Pink
              </Badge>
              <Badge variant='green' size='sm'>
                Green
              </Badge>
              <Badge variant='teal' size='sm'>
                Teal
              </Badge>
              <Badge variant='fancy' size='sm'>
                Fancy1
              </Badge>
            </div>
            <div className='flex flex-col gap-2'>
              <Badge variant='secondary' size='sm'>
                Secondary
              </Badge>
              <Badge variant='gray-subtle' size='sm'>
                Gray-subtle
              </Badge>
              <Badge variant='blue-subtle' size='sm'>
                Blue-subtle
              </Badge>
              <Badge variant='purple-subtle' size='sm'>
                Purple-subtle
              </Badge>
              <Badge variant='amber-subtle' size='sm'>
                Amber-subtle
              </Badge>
              <Badge variant='red-subtle' size='sm'>
                Red-subtle
              </Badge>
              <Badge variant='pink-subtle' size='sm'>
                Pink-subtle
              </Badge>
              <Badge variant='green-subtle' size='sm'>
                Green-subtle
              </Badge>
              <Badge variant='teal-subtle' size='sm'>
                Teal-subtle
              </Badge>
              <Badge variant='fancy-subtle' size='sm'>
                Fancy-subtle
              </Badge>
            </div>
          </div>

          <div className='flex gap-2'>
            <div className='flex flex-col gap-2'>
              <Badge>Default</Badge>
              <Badge variant='gray'>Gray</Badge>
              <Badge variant='blue'>Blue</Badge>
              <Badge variant='purple'>Purple</Badge>
              <Badge variant='amber'>Amber</Badge>
              <Badge variant='red'>Red</Badge>
              <Badge variant='pink'>Pink</Badge>
              <Badge variant='green'>Green</Badge>
              <Badge variant='teal'>Teal</Badge>
              <Badge variant='fancy'>Fancy1</Badge>
            </div>
            <div className='flex flex-col gap-2'>
              <Badge variant='secondary'>Secondary</Badge>
              <Badge variant='gray-subtle'>Gray-subtle</Badge>
              <Badge variant='blue-subtle'>Blue-subtle</Badge>
              <Badge variant='purple-subtle'>Purple-subtle</Badge>
              <Badge variant='amber-subtle'>Amber-subtle</Badge>
              <Badge variant='red-subtle'>Red-subtle</Badge>
              <Badge variant='pink-subtle'>Pink-subtle</Badge>
              <Badge variant='green-subtle'>Green-subtle</Badge>
              <Badge variant='teal-subtle'>Teal-subtle</Badge>
              <Badge variant='fancy-subtle'>Fancy-subtle</Badge>
            </div>
          </div>

          <div className='flex gap-2'>
            <div className='flex flex-col gap-2'>
              <Badge size='lg'>Default</Badge>
              <Badge size='lg' variant='gray'>
                Gray
              </Badge>
              <Badge size='lg' variant='blue'>
                Blue
              </Badge>
              <Badge size='lg' variant='purple'>
                Purple
              </Badge>
              <Badge size='lg' variant='amber'>
                Amber
              </Badge>
              <Badge size='lg' variant='red'>
                Red
              </Badge>
              <Badge size='lg' variant='pink'>
                Pink
              </Badge>
              <Badge size='lg' variant='green'>
                Green
              </Badge>
              <Badge size='lg' variant='teal'>
                Teal
              </Badge>
              <Badge size='lg' variant='fancy'>
                Fancy1
              </Badge>
            </div>
            <div className='flex flex-col gap-2'>
              <Badge size='lg' variant='secondary'>
                Secondary
              </Badge>
              <Badge size='lg' variant='gray-subtle'>
                Gray-subtle
              </Badge>
              <Badge size='lg' variant='blue-subtle'>
                Blue-subtle
              </Badge>
              <Badge size='lg' variant='purple-subtle'>
                Purple-subtle
              </Badge>
              <Badge size='lg' variant='amber-subtle'>
                Amber-subtle
              </Badge>
              <Badge size='lg' variant='red-subtle'>
                Red-subtle
              </Badge>
              <Badge size='lg' variant='pink-subtle'>
                Pink-subtle
              </Badge>
              <Badge size='lg' variant='green-subtle'>
                Green-subtle
              </Badge>
              <Badge size='lg' variant='teal-subtle'>
                Teal-subtle
              </Badge>
              <Badge size='lg' variant='fancy-subtle'>
                Fancy-subtle
              </Badge>
            </div>
          </div>
        </div>
      }
    >
      {children}
    </PreviewCode>
  );
};

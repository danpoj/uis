import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

export const PreviewCode = ({
  preview,
  children,
}: {
  preview: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <Tabs items={['Preview', 'Code']}>
      <Tab value='Preview'>{preview}</Tab>
      <Tab value='Code'>{children}</Tab>
    </Tabs>
  );
};

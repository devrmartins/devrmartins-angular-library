import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ImgUploadComponent } from './../projects/devrmartins-angular-library/src/lib/components/img-upload/img-upload.component';

export default {
  title: 'ImgUploadComponent',
  component: ImgUploadComponent
} as Meta

const Template: Story<ImgUploadComponent> = (args: ImgUploadComponent) => ({
  props: args,
});

export const Default = Template.bind({});




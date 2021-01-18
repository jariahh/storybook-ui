// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';
import { moduleMetadata } from '@storybook/angular/dist/client/preview/types';
import { CommonModule } from '@angular/common';

export default {
  title: 'Material/Button',
  component: ButtonComponent,
  decorators: [
      moduleMetadata({
          declarations: [ ButtonComponent ],
          imports: [ 
            CommonModule,
            MatButtonModule 
        ]
      }),
  ],
  argTypes: {
      color: {
          control: 'string'
      }
  }
} as Meta;

const Template: Story<ButtonComponent> = () => ({
  component: ButtonComponent,
  props: {
    color: '',
    label: 'Button'
  },
  template: `
    <button mat-raised-button [color]="color>{{ label }}</button>
  `
});

export const Basic = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary',
    color: 'primary'
};


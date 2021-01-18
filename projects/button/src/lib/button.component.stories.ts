// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';
import { MatButtonModule } from '@angular/material/button';

export default {
  title: 'Material/Button',
  component: ButtonComponent,
  argTypes: {
      color: {
          control: 'string'
      }
  }
} as Meta;

const Template: Story<ButtonComponent> = (args) => ({
  component: ButtonComponent,
  props: args,
  moduleMetadata: {
    imports: [MatButtonModule]
  }
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'Default',
  color: ''
};
export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary',
    color: 'primary'
};
export const Accent = Template.bind({});
Accent.args = {
  label: 'Accent',
  color: 'accent'
};
export const Warn = Template.bind({});
Warn.args = {
  label: 'Warn',
  color: 'warn'
};

import { html } from 'lit-html';
import { BlrTextButton as BlrTextButtonClass } from './index';
import { IconKeys } from '../../foundation/icons';
import { Sizes } from '../../globals/constants';
import './index';

export default {
  title: 'BlrTextButton',
  argTypes: {
    leadingIcon: {
      options: [undefined, ...IconKeys],
      control: { type: 'select' },
    },
    trailingIcon: {
      options: [undefined, ...IconKeys],
      control: { type: 'select' },
    },
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
    variant: {
      options: ['cta', 'primary', 'secondary', 'silent', 'destructive', 'encourage'],
      control: { type: 'select' },
    },
  },
};

export const BlrTextButton = ({
  label,
  onClick,
  onBlur,
  disabled,
  buttonId,
  variant,
  size,
  leadingIcon,
  trailingIcon,
}: BlrTextButtonClass) =>
  html`
    <blr-text-button
      .label=${label}
      .leadingIcon=${leadingIcon}
      .trailingIcon=${trailingIcon}
      .buttonId=${buttonId}
      .onClick=${onClick}
      .onBlur=${onBlur}
      .disabled=${disabled}
      .variant=${variant}
      .size=${size}
      class="example-layout-class"
    ></blr-text-button>
  `;

BlrTextButton.storyName = 'BlrTextButton';

BlrTextButton.args = {
  label: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  leadingIcon: 'undefined',
  trailingIcon: 'blrChevronDownMd',
  disabled: false,
  buttonId: 'button-id',
  variant: 'cta',
  size: 'md',
  iconPosition: 'left',
};
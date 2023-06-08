import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { loadingSpinner } from '../../foundation/component-tokens/feedback.css';
import { FeedbackSizesType, FeedbackVariants } from '../../globals/types';

@customElement('blr-loader')
export class BlrLoader extends LitElement {
  static styles = [styleCustom, loadingSpinner];

  @property() size?: FeedbackSizesType = 'md';
  @property() variant?: FeedbackVariants;
  @property() loadingStatus!: string;

  render() {
    const classes = classMap({
      [`${this.variant}`]: this.variant || '',
      [`${this.size}`]: this.size || 'md',
    });

    return html` <div class="blr-loader" role="status" aria-live="polite" aria-label="${this.loadingStatus}">
      <div class="blr-loading-spinner ${classes}"></div>
    </div>`;
  }
}
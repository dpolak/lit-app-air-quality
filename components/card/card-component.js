import {html, LitElement} from 'lit';
import {styles} from './card-styles';

export class Card extends LitElement {
  static styles = styles;

  static properties = {
    title: {type: String},
    data: {type: Array},
  };

  constructor() {
    super();
  }

  render() {
    return html`<div class="card-container">
      <div class="card-list">
        <slot></slot>
      </div>
    </div>`;
  }
}
customElements.define('card-container', Card);

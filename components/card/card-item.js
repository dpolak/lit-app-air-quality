import {html, LitElement} from 'lit';
import {styles} from './card-styles';

export class CardItem extends LitElement {
  static styles = styles;

  static properties = {
    title: {type: String},
    data: {type: Array},
    id: {type: String},
  };

  constructor() {
    super();
    this.data = [];
    this.title = '';
    this.id = '';
  }

  _removeItem() {
    const options = {
      detail: {
        id: this.id,
      },
    };
    this.dispatchEvent(new CustomEvent('remove', options));
  }

  render() {
    return html` <div class="card-list-item">
      <button @click=${this._removeItem} class="card-list-item__btn">
        X
      </button>
      <h3 class="card-list-item__title">${this.title}</h3>
      ${this.data.map(
        (item) => html`<div class="card-list-item__data-row">
          <span class="card-list-item__data-key">${item.name}</span>
          <span class="card-list-item__data-value">${item.value}</span>
        </div>`
      )}
    </div>`;
  }
}
customElements.define('card-item', CardItem);

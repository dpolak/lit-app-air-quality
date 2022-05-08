import {html, LitElement} from 'lit';
import './searchbox/searchbox-component';
import './card/card-component';
// import './searchbox/searchbox-component.js';

export class App extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <search-box></search-box>
      <card-container></card-container>
    `;
  }
}
customElements.define('app-wrapper', App);

import {html, LitElement} from 'lit';
import {styles} from './searchbox-styles';

export class Searchbox extends LitElement {
  static styles = styles;

  static properties = {
    query: {type: String},
  };

  constructor() {
    super();
  }

  render() {
    return html`<div class="searchbox">
      <input
        class="searchbox-input"
        type="text"
        placeholder="Wprowadź nazwę stacji pomiarowej"
      />
      <div class="searchbox-results-container">
        <span class="searchbox-results-item">Katowice...</span>
        <span class="searchbox-results-item">Katowice...</span>
        <span class="searchbox-results-item">Katowice...</span>
      </div>
    </div>`;
  }
}

customElements.define('search-box', Searchbox);

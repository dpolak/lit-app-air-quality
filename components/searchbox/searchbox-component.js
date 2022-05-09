import {html, LitElement} from 'lit';
import {styles} from './searchbox-styles';
import {fetchData} from '../utils/fetch';

export class Searchbox extends LitElement {
  static styles = styles;

  static properties = {
    stations: {type: Array},
    filteredStations: {type: Array},
    query: {type: String},
  };

  constructor() {
    super();
    this.query = '';
    // prefetch data to minimalize traffic
    this.stations = this.getData();
    // filtered stations will be śaved here
    this.filteredStations = [];
  }

  async getData() {
    const response = await fetchData(
      'https://api.gios.gov.pl/pjp-api/rest/station/findAll'
    );
    return response;
  }

  render() {
    const cssClass =
      this.filteredStations.length > 0
        ? `searchbox-results-container active`
        : `searchbox-results-container`;
    const list = html` ${this.filteredStations.map(
      (item) =>
        html`
          <span
            @click=${this._saveStation}
            .id=${item.id}
            class="searchbox-results-item"
            >${item.stationName}</span
          >
        `
    )}`;
    return html`<div class="searchbox">
      <input
        .value=${this.query}
        @keyup=${this._handleQuery}
        class="searchbox-input"
        type="text"
        placeholder="Wprowadź nazwę stacji pomiarowej"
      />
      <div class=${cssClass}>${list}</div>
    </div>`;
  }

  async _handleQuery(e) {
    this.query = e.target.value;
    if (e.target.value.length > 4) {
      this.filteredStations = await this.stations.then((d) => {
        return d.filter((d) => d.stationName.includes(this.query));
      });
    }
  }

  _saveStation(e) {
    const options = {
      detail: {
        data: this.filteredStations.find(
          (station) => station.id === +e.target.id
        ),
      },
    };
    this.dispatchEvent(new CustomEvent('saveStations', options));

    // reset ui
    this.filteredStations = [];
    this.query = '';
  }
}

customElements.define('search-box', Searchbox);

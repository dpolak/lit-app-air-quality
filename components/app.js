import {html, LitElement} from 'lit';
import './searchbox/searchbox-component';
import './card/card-component';
import './card/card-item';
import {fetchData} from './utils/fetch';
// import './searchbox/searchbox-component.js';

export class App extends LitElement {
  constructor() {
    super();
    this.savedStations = [];
  }

  static properties = {
    savedStations: {type: Array},
  };

  render() {
    return html`
      <search-box @saveStations=${this._handleSavedStations}></search-box>
      <card-container>
        ${this.savedStations.map(
          (item) =>
            html`
              <card-item
                @remove=${this._handleStationRemoval}
                .id=${item.id}
                .title=${item.stationName}
                .data=${item.sensors}
              ></card-item>
            `
        )}
      </card-container>
    `;
  }
  _handleSavedStations(e) {
    this._fillStationData(e.detail.data);
  }

  _handleStationRemoval(e) {
    this.savedStations = this.savedStations.filter(
      (st) => st.id !== e.detail.id
    );
  }

  async _fillStationData(station) {
    const sensorIDs = await fetchData(
      `https://api.gios.gov.pl/pjp-api/rest/station/sensors/${station.id}`
    );
    const sensorData = await sensorIDs.reduce(async (pr, curr) => {
      let acc = await pr;
      const lastSensorReading = await fetchData(
        `https://api.gios.gov.pl/pjp-api/rest/data/getData/${curr.id}`
      );

      acc = [
        ...acc,
        {
          id: curr.id,
          name: curr.param.paramName,
          value: lastSensorReading.values
            .reverse()
            .find((reading) => reading.value).value,
        },
      ];
      return acc;
    }, []);
    this.savedStations = [
      ...this.savedStations,
      {
        ...station,
        sensors: sensorData.sort((a, b) => {
          return a.name.localeCompare(b.name);
        }),
      },
    ];
  }
}
customElements.define('app-wrapper', App);

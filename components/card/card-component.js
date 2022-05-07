import {html, css, LitElement} from 'lit';
import {styles} from './card-styles';

export class Card extends LitElement {
  static styles = styles;

  static properties = {
    name: {type: String},
  };

  constructor() {
    super();
  }

  render() {
    const fakeStationData = [
      {
        id: 291,
        stationName: 'Gajew, Ujęcie Wody',
        gegrLat: '52.143250',
        gegrLon: '19.233225',
        city: {
          id: 209,
          name: 'Gajew',
          commune: {
            communeName: 'Witonia',
            districtName: 'łęczycki',
            provinceName: 'ŁÓDZKIE',
          },
        },
        addressStreet: 'Ujęcie wody',
      },
      {
        id: 659,
        stationName: 'Nisko, ul. Szklarniowa',
        gegrLat: '50.529892',
        gegrLon: '22.112467',
        city: {
          id: 600,
          name: 'Nisko',
          commune: {
            communeName: 'Nisko',
            districtName: 'niżański',
            provinceName: 'PODKARPACKIE',
          },
        },
        addressStreet: 'Szklarniowa',
      },
    ];

    const fakeSensorData = [
      {
        id: 92,
        stationId: 659,
        param: {
          paramName: 'pył zawieszony PM10',
          paramFormula: 'PM10',
          paramCode: 'PM10',
          idParam: 3,
        },
      },
      {
        id: 28085,
        stationId: 659,
        param: {
          paramName: 'pył zawieszony PM2.5',
          paramFormula: 'PM2.5',
          paramCode: 'PM2.5',
          idParam: 69,
        },
      },
    ];

    const list = html`<div class="card-list">
      ${fakeStationData.map(
        (item) => html`<div class="card-list-item">
          <button class="card-list-item__btn">X</button>
          <h3 class="card-list-item__title">${item.stationName}</h3>
          ${fakeSensorData
            .filter((sensorData) => sensorData.stationId === item.id)
            .map(
              (sd) => html`<div class="card-list-item__data-row">
                <span class="card-list-item__data-key"
                  >${sd.param.paramName}</span
                >
                <span class="card-list-item__data-value">123</span>
              </div>`
            )}
        </div>`
      )}
    </div>`;
    return html`<div class="card-container">${list}</div>`;
  }
}
customElements.define('card-container', Card);

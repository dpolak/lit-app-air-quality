import {css} from 'lit';

export const styles = [
  css`
    .card-container {
    }
    .card-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
      list-style-type: none;
    }
    .card-list-item {
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
      padding: 0.2rem 1rem;
      position: relative;
    }
    .card-list-item__btn {
      position: absolute;
      right: 15px;
      top: 15px;
      background-color: transparent;
      border-radius: 100%;
      height: 20px;
      width: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
      transition: 0.5s;
      opacity: 0;
      cursor: pointer;
      z-index: 2;
    }
    .card-list-item:hover .card-list-item__btn,
    .card-list-item:focus .card-list-item__btn,
    .card-list-item:active .card-list-item__btn {
      opacity: 0.4;
    }
    .card-list-item__btn:hover,
    .card-list-item__btn:focus,
    .card-list-item__btn:active {
      transform: scale(1.2);
    }

    .card-list-item__title {
      font-family: 'Barlow Condensed', sans-serif;
    }
    .card-list-item__data-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      margin-bottom: 0.3rem;
    }
    .card-list-item__data-key {
      font-weight: 100;
      font-size: 0.8rem;
      font-family: 'Barlow Condensed', sans-serif;
    }
    .card-list-item__data-value {
      font-weight: 600;
      font-size: 1rem;
      font-family: 'Bebas Neue', sans-serif;
    }
  `,
];

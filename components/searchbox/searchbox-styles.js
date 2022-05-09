import {css} from 'lit';

export const styles = [
  css`
    .searchbox {
      position: relative;
      margin-bottom: 1rem;
      max-width: 300px;
      width: 100%;
    }
    .searchbox-input {
      width: 100%;
      padding: 0.5rem;
      border: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.4);
      font-family: 'Bebas Neue', sans-serif;
      letter-spacing:0.1rem;
    }
    .searchbox-results-container {
      position: absolute;
      left: 0;
      top: 100%;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      z-index: 1;
      background-color: #fff;
      width: 100%;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
      transition: 0.5s;
      opacity: 0;
      visibility: hidden;
    }
    .searchbox-results-container.active {
      opacity: 1;
      visibility: visible;
    }
    .searchbox-results-item {
      font-weight: 100;
      font-size: 0.9rem;
      cursor: pointer;
      transition: 0.5s;
      font-family: 'Barlow Condensed', sans-serif;
    }
    .searchbox-results-item:hover,
    .searchbox-results-item:focus,
    .searchbox-results-item:active {
      padding-left: 5px;
    }
  `,
];

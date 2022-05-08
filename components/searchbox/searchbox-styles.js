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
    }
    .searchbox-results-item {
      font-weight: 100;
      font-size: 0.9rem;
    }
  `,
];

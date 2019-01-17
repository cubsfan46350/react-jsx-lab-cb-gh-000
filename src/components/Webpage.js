import React from 'react';
import ReactDOM from 'react-dom';
import FillerText from './components/FillerText';

export class Webpage extends React.Component {
  render() {
    return (
      <div>
        <h1>The world's coolest webpage</h1>
        <FillerText />
      </div>
      );
  }
}
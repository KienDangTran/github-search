import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SearchPage from './SearchPage';

export default class App extends Component {
  render() {
    return (
      <Grid>
        <SearchPage />
      </Grid>
    );
  }
}

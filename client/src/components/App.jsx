import React, { Component } from 'react';

import { Container, Row, Col, Navbar } from 'react-bootstrap';
import Navibar from './Logo-And-Searchbar/Navibar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className='full-container'>
        <Navibar />
        <Container className='announcement-message'>
          STATE-WIDE ANNOUNCEMENT MESSAGE! —— SALE / DISCOUNT{' '}
          <strong>OFFER</strong> —— <u>NEW PRODUCT HIGHTLIGHT</u>
        </Container>
        <Container className='main-container'>
          <Container className='image-gallery'>Image-gallery</Container>
          <Container>
            <Container className='product-information'>
              Product information
            </Container>
            <Container className="style-selector">Style selector</Container>
            <Container className="add-to-cart">Add to Cart</Container>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default App;

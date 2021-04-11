
import React, { Component } from 'react';

class Flat extends Component {

  handleClick = (event) => {
    // console.log(event.target);
    // console.log(this.props.lat);
    // console.log(this.props.lng);
    // console.log(14);
    // this.props.zoomOnMapCenter(this.props.lat, this.props.lng, 14);
    this.props.zoomOnMapCenter(this.props.lat, this.props.lng ,16);
  }

  render() {
    // let style = `background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';);`;
    // let imgPath = '../../data/fat.jpg';
    let imgPath = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';
    return (
      <div className="card" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.imgUrl}')`
        }} onClick={this.handleClick}>
        <div className="card-category">{this.props.priceStr}</div>
        <div className="card-description">
          <h2>{this.props.desc}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;

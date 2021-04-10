
import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import Flats from '../../data/flats.js';

import Flat from './flat.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { flats: [] };
    this.loadFlats();
    console.log(this.state.flats);
  }

  loadFlats = () => {
    let flatArr = Flats.map( (flat) => {
      let newFlat = new Map();
      newFlat.imgUrl = flat.imageUrl;
      newFlat.desc = flat.name;
      newFlat.priceStr = `${flat.price} ${flat.priceCurrency}`;
      newFlat.lat = flat.lat;
      newFlat.lng = flat.lng;
      return newFlat;
    });
    // this.setState({flats: flatArr});
    this.state.flats = flatArr;
  }

  render() {

    // let imgUrl = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg";
    // let priceStr = `164 EUR`;
    // let desc = "Charm at the Steps of the Sacre Coeur/Montmartre";
    // let lat = 48.884211;
    // let lng = 2.34689;


    return (
      <div>
        <div className="flat-list" >
          <FlatList flats={this.state.flats}/>
          {/*<Flat imgUrl={imgUrl} priceStr={priceStr} desc={desc} lat={lat} lng={lng} />*/}
        </div>
        <div className="map-container"></div>
      </div>
    );
  }
}

export default App;


    // name: "Charm at the Steps of the Sacre Coeur/Montmartre",
    // imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
    // price: 164,
    // priceCurrency: "EUR",
    // lat: 48.884211,
    // lng: 2.34689

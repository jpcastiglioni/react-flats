
import React, { Component } from 'react';

import Flat from './flat.jsx';

// const FlatList = (props) => {

//    return (
//       <div className="flat-list">
        // {
        //   props.flats.map( (flat) => {
        //     return <Flat imgUrl={flat.imgUrl}
        //                  priceStr={flat.priceStr}
        //                  desc={flat.desc}
        //                  lat={flat.lat}
        //                  lng={flat.lng}
        //                  changeFunc={props.changeZoomFunc}
        //                  key={flat.lat}
        //                  />;
        //   })
        // }
//       </div>
//     );
// }

class FlatList extends Component {

  render() {
    return (
      <div className="flat-list">
      {
        this.props.flats.map( (flat) => {
          return <Flat imgUrl={flat.imgUrl}
                       priceStr={flat.priceStr}
                       desc={flat.desc}
                       lat={flat.lat}
                       lng={flat.lng}
                       zoomOnMapCenter={this.props.zoomOnMapCenter}
                       key={flat.lat}
                       />;
        })
      }
      </div>
    );
  }
}

export default FlatList;

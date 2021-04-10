
import React, { Component } from 'react';

import Flat from './flat.jsx';

const FlatList = ({ flats }) => {

   return (
      <div className="flat-list">
        {
          flats.map( (flat) => {
            return <Flat imgUrl={flat.imgUrl} priceStr={flat.priceStr} desc={flat.desc} lat={flat.lat} lng={flat.lng} />;
          })
        }
      </div>
    );
}

// class FlatList extends Component {

//   render() {
//     return (
//       <div className="flat-list">
//         {
//           this.props.flats.map( () => {
//             return <Flat imgUrl={imgUrl} priceStr={priceStr} desc={desc} lat={lat} lng={lng} />;
//           })
//         }
//       </div>
//     );
//   }
// }

export default FlatList;

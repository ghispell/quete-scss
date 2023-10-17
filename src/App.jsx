import { useState } from 'react';
import './style.scss';
import StarRating from "./StarRating";

function App() {


  return (
    <>
      <div className='container'>
       <div className='description'>
        <img src="yame.jpg" alt="Album Yame" />
        
          <div className='nameAlbum'>
            <h2>Yamê</h2>
            <h3>ELOWI (2023)</h3>
          </div>
          <p>Yamê est un jeune artiste franco-camerounais né d'un père musicien et d'une mère informaticienne, deux passions dont il a hérité et qui rythment sa vie. 100% autodidacte, il lance sa carrière solo en mars 2020 après avoir débuté en tant que claviériste et chanteur dans les Jams Parisiennes.</p>
        </div>
        <div className='rating'>
          <p>Notez cet album :</p>
          <div className='starRating'><StarRating /></div>
        </div>
      </div>
    </>
  )
}

export default App

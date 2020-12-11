import React from 'react';
import Card from './card';

import './card.css';


const wonders = [
    {
      name: 'Pyramide de Khéops',
      image: 'https://i0.wp.com/blog.education.nationalgeographic.org/wp-content/uploads/2006/11/24757.jpg?resize=720%2C540&ssl=1',
      location: 'Egypte',
      year: '2550 to 2490 B.C'
    },
    {
      name: 'Jardins de Babylone',
      image: 'https://static.nationalgeographic.fr/files/styles/image_3200/public/babylonian-oasis-artist-rendering.webp?w=1600&h=900',
      location: 'Irak',
      year: '1er siècle avant JC'
    },
    {
      name: 'Statue de Zeus',
      image: 'https://www.merveilles-du-monde.com/Sept/images/Vignettes/Statue-de-Zeus/Statue-de-Zeus-V.jpg',
      location: 'Grèce',
      year: '2e siècle'
    },
    {
      name: 'Temple d\'Artémis',
      image: 'https://www.merveilles-du-monde.com/Sept/images/Vignettes/Temple-d-Artemis/Replique-du-temple-d-Artemis-V.jpg',
      location: 'Éphèse',
      year: '560 av. J.-C.'
    },
    {
      name: 'Colosse de Rhodes',
      image: 'https://i.pinimg.com/originals/4c/67/2d/4c672dd0fbedb36704f8e00f726a99ef.jpg',
      location: 'Grèce',
      year: '292 avant JC'
    }
  ];
  
  const Sevenwonders = () => (
    <div className='divFlexboxRow'>
      {wonders.map(item => (
        <Card name={item.name} img={item.image} location={item.location} year={item.year} />
      ))}
    </div>
  );

  export default Sevenwonders;
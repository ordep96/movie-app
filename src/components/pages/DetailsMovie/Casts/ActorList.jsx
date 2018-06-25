import React from 'react';


import Actor from './Actor';
import '../../../styles/carousel.css';




const ActorList = props => (
  <section className="actor-list">
    <h2>Actores Principales</h2>
    <section className="carousel-actors">
      <div className="grid-actors">
          {
            props.cast.map((actor,i,array) => (
              i >= 5
                ? null
                : <Actor key={actor.id} {...actor} />
            ))
          }
      </div>
    </section>
  </section>
)

export default ActorList;
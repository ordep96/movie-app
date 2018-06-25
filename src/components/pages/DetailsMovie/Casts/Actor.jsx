import React from 'react';

import notUserImg from '../../../../media/not-user.jpg';

import '../../../styles/actor.css';


const Actor = props => (
  <div className="actor-content">
    <article className="actor">
      <figure className="actor__head">
        <img src={
            props.profile_path !== null
              ?
                `https://image.tmdb.org/t/p/original/${props.profile_path}`
              : notUserImg
           }
            alt={props.name}/>
      </figure>
      <section className="actor__body">
        <h2>{props.name}</h2>
        <p>{props.character}</p>
      </section>
    </article>
  </div>
)

export default Actor;
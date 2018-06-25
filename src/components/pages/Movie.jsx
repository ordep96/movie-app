import React from 'react';

import { excerpt } from '../helpers/movieApi';
import{
  Link
} from 'react-router-dom';

const Movie = props => (
  <article className="movie">
    <section className="movie__poster">
      <figure>
        <img src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} alt={props.title}/>
      </figure>
    </section>
    <section className="movie__body">
      <div className="content">
        <h3>{props.title}</h3>
        <p className="description">{props.overview === '' ? 'No tiene sipnosis disponible' : excerpt(props.overview)}</p>
      </div>
      <div className="footer">
        <Link to={`/movie-app/movie/${props.id}`}>Más información</Link>
      </div>
    </section>
  </article>

)


export default Movie;
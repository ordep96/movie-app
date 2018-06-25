import React from 'react';

import Movie from './Movie';
import Pagination from './Pagination';

import '../styles/movie_list.css';

const MovieList = props => (
  <div className="content-movies">
    <div className="container">
      <div className="grid-movies">
          {
            props.movies.map(movie => (
                <Movie key={movie.id} {...movie} />
            ))
          }
      </div>
    </div>
    <Pagination
      page={props.page}
      infoPage={props.infoPage}
      navigation={props.navigation}
      uriParameter={props.uriParameter}
    />
  </div>
)


export default MovieList;
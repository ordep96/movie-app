import React from 'react';

import '../../styles/detailsMovie/banner.css';

const BannerMovie = props => {

  let bannerStyle = {
    backgroundImage:`url(https://image.tmdb.org/t/p/original/${props.backdrop_path})`,
    backgroundSize:"cover"
  };

  return(
    <section className="banner-movie" style={bannerStyle}>
      <div className="overlay"></div>
      <div className="container">
        <div className="banner">
          <figure className="banner__poster">
            <img src={`https://image.tmdb.org/t/p/original/${props.poster_path}`} alt={props.original_title}/>
          </figure>
          <article className="banner__description">
            <h2 className="title">{props.original_title}</h2>
            {
              props.videos.results.length > 0
                ? (
                  <button onClick={props.openModal} className="link-trailer">
                      <span className="fa fa-play"></span>
                      Ver Trailer
                  </button>
                )
                : <p>No hay trailer disponible</p>
            }

            <div className="overview">
              <h3>General</h3>
              <p>{props.overview}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )

}


export default BannerMovie;
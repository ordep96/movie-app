import React from 'react';
import {
  Link
} from 'react-router-dom';


import '../styles/pagination.css';

const Pagination = props => {
  const { page } = props.infoPage;

  return(
    <section className="container">
      <div className="content-pagination">
        <ul className="pagination" onClick={props.navigation}>
          {
            page === 1
              ? <li></li>
              : (
                <li>
                    <Link to={`/movie-app/${props.uriParameter}/${page-1}`} data-page={page - 1} className="arrow" id="previous">
                      <span className="fa fa-arrow-left"></span>
                    </Link>
                </li>
              )
          }

          {
            page === 1000
            ? <li></li>
            : (
              <li>
                <Link to={`/movie-app/${props.uriParameter}/${page+1}`} data-page={page + 1} className="arrow" id="next">
                  <span className="fa fa-arrow-right"></span>
                </Link>
             </li>
            )
          }
        </ul>
      </div>
    </section>
  )

}

export default Pagination;
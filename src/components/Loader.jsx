import React from 'react';

import LoaderImg from '../media/cinema.svg';

import './styles/loader.css';

const Loader = props => (
  <section className={`loader ${props.load ? 'loader-active' : '' }`}>
    <img src={LoaderImg} alt="loader" />
  </section>
)

export default Loader;
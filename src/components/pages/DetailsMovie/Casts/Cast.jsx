import React, { Component } from 'react';

import ActorList from './ActorList';



import { apiKey, getData } from '../../../helpers/movieApi';

class Cast extends Component{
  constructor(...props){
    super(...props)

    this.state = {
      idMovie:this.props.idMovie,
      cast:[],
      isMounted:false,
      loading:true
    }

  }


  componentDidMount(){
    this.setState({isMounted:true})
    const { idMovie } = this.state;

    getData(`https://api.themoviedb.org/3/movie/${idMovie}/credits?api_key=${apiKey}`)
      .then(response => {
          if(this.state.isMounted){
            this.setState({cast:response,loading:false})
          }
      })

  }


  componentWillUnmount(){
    this.setState({isMounted:false})
  }

  render(){
    return (
      this.state.loading
        ? <p>Cargando Actores...</p>
        : (
          <div className="container">
            <ActorList {...this.state.cast} />
          </div>
        )
    )
  }

}



export default Cast;

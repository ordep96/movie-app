import React, { Component } from 'react';


import MovieList from './MovieList';
import Loader from '../Loader';


import { apiKey, getData } from '../helpers/movieApi';


class Home extends Component{
  constructor(...props){
    super(...props)

    this.state = {
      data:[],
      page:this.props.match.params.id,
      isMounted:false,
      loading:true
    }

    this.handleNavigationOption = this.handleNavigationOption.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }


  componentDidMount(){
    this.setState({isMounted:true})
    getData(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es&page=${this.state.page}`)
      .then(response => {
        if(this.state.isMounted){
          this.setState({data:response,loading:false})
        }
      })

  }

  componentWillUnmount(){
    this.setState({isMounted:false})
  }


  nextPage(page){

    this.setState({loading:true})

    getData(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es&page=${page}`)
      .then(response => {
        this.setState({data:response,loading:false})
      })
  }

  previousPage(page){
    this.setState({loading:true})

    getData(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es&page=${page}`)
      .then(response => {
        this.setState({data:response,loading:false})
      })
  }


  handleNavigationOption(e){
    e.preventDefault();
    let target = e.target;

    if(target.id === "next"){
      let page = target.getAttribute("data-page");
      this.setState({page})
      this.nextPage(page);
    }

    if(target.id === "previous"){
      let page = target.getAttribute("data-page");
      this.setState({page})
      this.previousPage(page);
    }

  }

  render(){
    return(
      this.state.loading
        ? <Loader load={this.state.loading}/>
        : (
          <MovieList
            movies={this.state.data.results}
            infoPage={this.state.data}
            navigation={this.handleNavigationOption}
            uriParameter={"discover"}
          />
        )
    )
  }

}

export default Home;
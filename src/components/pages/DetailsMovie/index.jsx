import React, { Component } from 'react';


import BannerMovie from './BannerMovie';
import Cast from './Casts/Cast';
import ModalContainer from '../../widgets/ModalContainer';
import ModalTrailerVideo from './ModalTrailerVideo';

import Loader from '../../Loader';



import { apiKey, getData } from '../../helpers/movieApi';


class DetailsMovie extends Component{
  constructor(...props){
    super(...props)


    this.state = {
      isMounted:false,
      loading:true,
      modalOpen:false,
      data:[]
    }

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleEndVideoYoutube = this.handleEndVideoYoutube.bind(this);
  }


  componentDidMount(){
    const { id } = this.props.match.params;
    this.setState({isMounted:true})
    getData(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es&append_to_response=videos`)
      .then(response => {
        if(this.state.isMounted){
            this.setState({data:response,loading:false})

        }

      })
  }

  componentWillUnmount(){
    this.setState({isMounted:false})
  }


  handleOpenModal(e){
    e.preventDefault();
    this.setState({modalOpen:true})
  }

  handleCloseModal(e){
    e.preventDefault();
    this.setState({modalOpen:false})
  }

  handleEndVideoYoutube(e){
    if(e.data === 0) this.setState({modalOpen:false})
  }


  render(){
    return(
      this.state.loading
        ? <Loader load={this.state.loading}/>
        :(
          <section className="detailsMovie">
            <BannerMovie
              {...this.state.data}
              openModal={this.handleOpenModal}
              activeModal={this.state.modalOpen}
            />
            <Cast idMovie={this.state.data.id}/>
            <ModalContainer>
              <ModalTrailerVideo
                keyVideo={
                  this.state.data.videos.results.length > 0
                    ? this.state.data.videos.results[0].key
                    : null
                }
                closeModal={this.handleCloseModal}
                activeModal={this.state.modalOpen}
                endVideoYoutube={this.handleEndVideoYoutube}
              />
            </ModalContainer>
          </section>
        )
    )
  }

}


export default DetailsMovie;
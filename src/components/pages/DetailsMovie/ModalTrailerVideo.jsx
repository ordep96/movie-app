import React from 'react';
import Youtube from 'react-youtube';


import '../../styles/modal.css';

const opts = {
  playerVars:{
    autoplay:1
  }
}

const ModalTrailerVideo = props => (
  <section className={`modal ${ props.activeModal ? 'active-modal': '' }`}>
    <button onClick={props.closeModal} className="btn-close">
      <span className="fa fa-times"></span>
    </button>
    <div className="content-video">
      {
        props.activeModal
          ? (
              <Youtube
                videoId={props.keyVideo}
                opts={opts}
                onStateChange={props.endVideoYoutube}
              />

          )
          : null
      }
    </div>
  </section>
)


export default ModalTrailerVideo;
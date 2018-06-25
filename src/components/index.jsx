/* Dependencies */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

/* Components */
import HomeLayout from './HomeLayout';
import Menu from './Menu';

import Home from './pages/Home';

import Footer from './Footer';


import Error404 from './pages/Error404';


import DetailsMovie from './pages/DetailsMovie/';

class App extends Component{
  constructor(...props){
    super(...props)

    this.state = {
      menuActive:false,
      deleteEvent:true,
    }

    this.handleOpenMenu = this.handleOpenMenu.bind(this);
    this.handleOpenSubMenu = this.handleOpenSubMenu.bind(this);
  }


  resize(){
    this.setState({deleteEvent:window.innerWidth > 920})
  }


  handleOpenMenu(e){
    e.preventDefault();
    this.setState({menuActive:!this.state.menuActive})
  }

  /* pasar como propiedad a menu en el futuro */
  handleOpenSubMenu(e){
    e.preventDefault();
    if(!this.state.deleteEvent){
        let target = e.target;

        if(target.className === 'item-menu'){
          let subMenu = target.nextElementSibling;

          subMenu.classList.toggle('open-submenu');
        }
    }

  }


  componentDidMount(){
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();

  }


  render(){
    return(
     <HomeLayout>
        <Router>
          <div>
            <Menu
                  openMenu={this.handleOpenMenu}
                  menuActive={this.state.menuActive}
              />
            <div className="content-app">
              <Switch>
                  <Route exact path="/movie-app/" component={Home}/>
                  <Route path="/movie-app/discover/:id" component={Home} />
                  <Route path="/movie-app/movie/:id" component={DetailsMovie} />
                  <Route component={Error404} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
     </HomeLayout>
    )
  }

}


export default App;
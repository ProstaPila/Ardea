import React, { Component } from 'react'
import Link from 'gatsby-link'
import logo from '../../img/logosmall.png'
import fb from '../../img/fb.svg'
import twitter from '../../img/twitter.svg'
import './Navbar.sass'

class Navbar extends Component {
 
  state= { active: false};

    
  toggleNav() {
    this.setState({active: !this.state.active});
} 
  closeNav(){
    this.setState({active:false})
  }

  render(){
  
    let css = "";
    let trans = "is-close"
    if(this.state.active) {
      css = "is-active"
      trans = "is-active"
    }

  return(
  <nav className='navbar is-fixed-top' aria-label='main navigation'>
    <div className="container">
    
      <div className="navbar-brand">
      <button className={['button navbar-burger', css].join(" ")} data-target='navMenu' onClick={this.toggleNav.bind(this)}>
          <span />
          <span />
          <span />
        </button>
        
      </div>
      <div className={['navbar-menu', css].join(" ")} id='navMenu'>
      <div className={['navbar-start', trans].join(" ")}>
      
       
      <Link className="navbar-item" to="/"  onClick={this.closeNav.bind(this)}>
          Strona Głowna
        </Link>
      <Link className="navbar-item" to="/onas"  onClick={this.closeNav.bind(this)}>
          O nas
        </Link>
        <Link className="navbar-item" to="/wyceny"  onClick={this.closeNav.bind(this)} >
          Wyceny
        </Link>
        <Link className="navbar-item" to="/specjalistyczne"  onClick={this.closeNav.bind(this)} >
          Specjalistyczne
        </Link>
        <Link className="navbar-item" to="/obsluga"  onClick={this.closeNav.bind(this)} >
          Obsuga prawna
        </Link>
        <Link className="navbar-item" to="/doradzctwo"  onClick={this.closeNav.bind(this)} >
          Doradzctwo
        </Link>
        <Link className="navbar-item" to="/wspolpraca"  onClick={this.closeNav.bind(this)} >
          Wspolpraca 
        </Link>

        <Link className="navbar-item" to="/kontakt"  onClick={this.closeNav.bind(this)}>
          Kontakt
        </Link>
      </div>
      <div className="navbar-end">
        
             </div>
       </div>
      </div>
    
  </nav>
);
}};

export default Navbar

import React from 'react'
import Link from 'gatsby-link'
import logo from '../../img/logosmall.png'
import mail from '../../img/sent-mail.svg'
import fb from '../../img/fb.svg'
import twitter from '../../img/twitter.svg'
import './Footer.sass'

const Footer = () => (
    <footer>
      <div className="container">
      <div className="columns">

        
        <div className="column">
          <figure className="image logofooter">
            <img src={logo} alt="Ardea, Kancelraia Prawna Nieruchomości" />
            <div className="kancelaria">Kancelaria Prawna Nieruchomości</div>
            </figure>
          <div className="logofoot">
        <div className="details">
        <a href="tel:501761361"><b>tel:</b> 501 761 361 </a><br /> 
        <a href="tel:501761361"><b>fax:</b> 58 355 53 09 </a><br /> 
        <a href="mailto: kancelaria@ardea.biz.pl"><b>e-mail:</b>  kancelaria@ardea.biz.pl </a></div>

         
         
         

        </div>
        </div>
        <div className="column">
          <div className="flexbox">
        

       
       <p><b>Sopot</b><br />ul. Armii Krajowej 137A/12
          <br />
81-824 Sopot<br />
tel. 58 341 88 94, <br /> 58 355 53 00 <br />
fax 58 355 53 09 <br />
kom. 501 761 361 </p>
         </div> 
      </div>
      <div className="column">
          <div className="flexbox">
        

        
        <p><b>Warszawa</b><br />
         ul. Racławicka 99<br />
          02-634 Warszawa <br />
          tel./fax 22 844 18 24<br />
          kom. 501 761 361
         </p> 
        
         </div> 
      </div>
      </div>
  </div>
  <div className="columns forfooter">
    <div className="column">
  <div className="container">
          <div className="menu">
          <Link className="navbar-item" to="/">
          Strona Głowna
        </Link>
      <Link className="navbar-item" to="/onas"  >
          O nas
        </Link>
        <Link className="navbar-item" to="/wyceny"   >
          Wyceny
        </Link>
        <Link className="navbar-item" to="/specjalistyczne"   >
          Specjalistyczne
        </Link>
        <Link className="navbar-item" to="/obsluga"   >
          Obsuga prawna
        </Link>
        <Link className="navbar-item" to="/doradzctwo"   >
          Doradzctwo
        </Link>
        <Link className="navbar-item" to="/wspolpraca"   >
          Wspolpraca 
        </Link>

        <Link className="navbar-item" to="/kontakt"  >
          Kontakt
        </Link>
          </div>
        </div>
        </div>
  </div>

  <div className="columns">
    <div className="column">
  <div className="spaceout">
  <small>Designed by spaceout.pl</small>
  </div>
  </div>
  </div>
  </footer>
)

export default Footer
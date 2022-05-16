import { Outlet } from "react-router-dom"
import { Fragment } from 'react';
import { Link } from "react-router-dom";
import mainLogo from'../../../assets/logo.jpg';
import './navigator.style.scss';
const Navigator = () => {
    return(
        <Fragment >
            <div className="header">
      <div className="navigator">
          <Link className="logo-container" to='/'>
      <img style={{
          float: 'left',
          width: '70px',
          marginRight: '10px',
          height: '70px',
          background: '#555',
          borderRadius: '55px',
      }} src={mainLogo}/>
      <h2 style={{
          fontFamily: "Monospace",
          textDecoration: "None",
          
      }}>GAMERS UNITED</h2>
    </Link>
      <div className="links-container">
        <Link className="nav-link" to='/shop'>
        SHOP
        </Link>
        <Link className="nav-link" to='/sign-in'>
        SIGN-IN
        </Link>

      </div>
      </div>
      </div>
      <Outlet/>
      </Fragment>
    
    
    )
    
    }
    export default Navigator;
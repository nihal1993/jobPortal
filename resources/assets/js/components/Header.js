import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import bg from '../img/cv_bg.jpg';
 
/* An example React component */
class  Header extends Component {
    render() {
        return (
      
       <header>         
       <div className="header-area header-transparrent">
           <div className="headder-top header-sticky">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-2">
                            
                            <div className="logo">
                            	<img src="/img/logo/logo.png" alt="" />
                            </div>  
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="menu-wrapper">
                                <div className="main-menu">
                                    <nav className="d-none d-lg-block">
                                        <ul id="navigation">
                                            <li><Link to={'/'} >Home</Link></li>
                                            
                                            <li><a href="#">Signup</a>
                                                <ul className="submenu">
                                                    <li><Link to={'/registerCompany'} >Company</Link></li>
                                                    <li><Link to={'/registerCandidate'} >Candidate</Link></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Login</a>
                                                <ul className="submenu">
                                                    <li><Link to={'/LoginCompany'} >Company</Link></li>
                                                    <li><Link to={'/LoginCandidate'} >Candidate</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>         
                            </div>
                        </div>
                      
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
           </div>
       </div>
        
    </header>
   
    
        );
    }
}
 
export default Header;
 

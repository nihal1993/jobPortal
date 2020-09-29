import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import bg from '../img/cv_bg.jpg';
import  { Redirect } from 'react-router-dom'
 
/* An example React component */
class  Navbar extends Component {

    constructor(props) {
         super(props);
         this.state = {
         status:false,
        }
         this.logoutUser = this.logoutUser.bind(this);

    }

    logoutUser() {
        var bearer = 'Bearer ' + localStorage.getItem('itemName');
        fetch(window.location.origin+"/api/logout" , {
              method: 'POST',
              headers: {
                'Authorization': bearer,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ data: 'logging out' })
            }).then(response => {
            return response.json();
                })
                .then(data => {
                    //Fetched product is stored in the state
                    localStorage.setItem('itemName', 'null');
                    this.setState({ status: true});
                });
     }

     renderElement(){
       if(this.state.status){
          return <Redirect 
            to={{
            pathname: '/'
         }} />;
     }else{
             return null;
         }
    }

    render() {
        return (
        <div>
       <div>{ this.renderElement() }</div>
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
                                            <li><Link to={'/Job'} >Post Job</Link></li>
                                             <li><Link to={'/PostedJobs'} >View 
                                             Posted Jobs </Link></li> 
                                        </ul>
                                    </nav>
                                </div>
                                <div class="header-btn d-none f-right d-lg-block">
                                    <button  style={{ background: 'black','color':'white',padding:'8px' }} onClick={this.logoutUser} >
                                             Logout
                                            </button>
                                    
                                
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
    </div>
        );
    }
}
 
export default Navbar;


 

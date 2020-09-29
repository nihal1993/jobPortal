import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

 
/* An example React component */
class  Dashboard extends Component {
    constructor(props){
        super(props);
        console.log(this.props.location) //undefined
    }
    render() {

        return (

       <div>
        <Navbar />  
        <div className="slider-area " >
                <div className="slider-active">
                    <div className="single-slider slider-height d-flex align-items-center" >
                        <div className="container" >
                            <div className="row" >
                                <div className="col-xl-6 col-lg-9 col-md-10">
                                    <div className="hero__caption">
                                        <h1>Find the most exciting jobs
                                            {this.props.location.state.userdata.name}
                                        </h1>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-9 col-md-10">
                                    <div className="hero__caption">
                                        <img src="/img/blog/home-blog1.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        );
    }
}
 
export default Dashboard;
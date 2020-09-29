import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Header from './Header';

 
/* An example React component */
class  Main extends Component {
    render() {
        return (
       <div>
        <Header />  
        <div className="slider-area " >
                <div className="slider-active">
                    <div className="single-slider slider-height d-flex align-items-center" >
                        <div className="container" >
                            <div className="row" >
                                <div className="col-xl-6 col-lg-9 col-md-10">
                                    <div className="hero__caption">
                                        <h1>Find the most exciting jobs</h1>
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
 
export default Main;
 

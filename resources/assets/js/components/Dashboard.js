import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import  { Redirect } from 'react-router-dom'

 
/* An example React component */
class  Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
         status:false,
        }
       console.log(this.props.location.state);
        this.postJob = this.postJob.bind(this);
    }
    
     postJob() {
         this.setState({ status: true});
     }

      renderElement(){
       if(this.state.status){
          return  <Redirect 
            to={{
            pathname: '/Job',
            state: { id: this.props.location.state.userdata[0].id}
         }} 
         />;
     }else{
             return null;
         }
    }

    render() {

        return (

       <div>
        <div>{ this.renderElement() }</div>
        <Navbar  />  
        <div className="slider-area " >
                <div className="slider-active">
                    <div className="single-slider slider-height d-flex align-items-center" >
                        <div className="container" style={{ 'padding-bottom':'70px', 'padding-top':'170px' }} >
                            <div className="row" >
                                <div className="col-xl-6 col-lg-9 col-md-10">
                                    
                                        <h1> Hi <span style={{ 'font-size':'18px','color':'#72C6CD ',padding:'8px' }}>{this.props.location.state.userdata[0].name.toUpperCase()}, </span> </h1>
                                           <h2 style={{ 'font-size':'18px','color':'#EC7198  '}}> Welcome to Job finder .</h2>
                                           <div class="right-caption">
                           
                                                <div className="section-tittle section-tittle2">
                                                    <span></span>
                                                    <h2>24k Talented people are getting Jobs</h2>
                                                </div>
                                                <div className="support-caption">
                                                    <p className="pera-top">In the modern days, it is quite a common fact that people change their job frequently. </p>
                                                    <p> Because of the rise of employment opportunities in private sector companies, there is huge demand for the professionals. It is argued that majority of the employees move to other jobs due to various factors which enforces them to do so. The discussable points are firstly to achieve their personal and professional growth as well as to break their routine work culture in official activities, employees prefer to change their jobs.</p>
                                                    <a href="#" onClick={this.postJob} className="btn post-btn">Post a job</a>
                                                </div>
                                            </div>
                                        
                                    
                                </div>
                                <div className="col-xl-6 col-lg-9 col-md-10" >
                                    <div className="hero__caption">
                                        <img src="/img/service/support-img.jpg" alt="" />

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
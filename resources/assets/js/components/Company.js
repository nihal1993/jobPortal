 import { Formik } from 'formik';
 import React, { Component } from 'react';
 import RegisterCompanyForm from './RegisterCompanyForm';
 import Header from './Header';

 class  Company extends Component {
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
                                        <h1>Recruters</h1>
                                    </div>
                                </div>
                                
                                <div className="col-xl-5 col-lg-9 col-md-10">
                                    <div className="hero__caption">
                                        <RegisterCompanyForm />
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
 
 
 export default Company;

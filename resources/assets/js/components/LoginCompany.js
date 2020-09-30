 import { Formik } from 'formik';
 import React, { Component } from 'react';
 import FlashMessage from 'react-flash-message'
 import  { Redirect } from 'react-router-dom'
 
 class  LoginCompany extends Component {
    constructor() {
   
    super();
    //Initialize the state in the constructor
    this.state = {
        userData: [],
        status:false,
    }
    console.log(this.state.status);
  }

   renderElement(){
    
     if(this.state.userData.status){
        localStorage.setItem('itemName', this.state.userData.token);
        return <Redirect 
            to={{
            pathname: '/Dashboard',
            state: { userdata: this.state.userData.user}
         }} />;
     }else{
           return null;
         }}

    render() {
        return (

         <div>

         <div>{ this.renderElement() }</div>
       <Formik
          initialValues={{ email: '', password: '' }}
         validate={values => {
           const errors = {};
           if (!values.email) {
             errors.email = 'Email is required';
           } else if (
             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
           ) {
             errors.email = 'Invalid email address';
           }

           if (!values.password) {
             errors.password = 'password is required';
           } else if (
             /^[A-Za-z]\w{7,14}$/.test(values.password)
           ) {
             errors.password = ' 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter';
           }

           return errors;
         }}
         onSubmit={(values, { setSubmitting }) => {
           setTimeout(() => {
              this.setState({ status: false});
              values.type='company';
      fetch(window.location.origin+"/api/login" , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values)
        }).then(response => {
            return response.json();
            })
            .then(data => {
               console.log(data);
                this.setState({ userData: data });
                this.setState({ status: !this.state.userData.status});
            });

             setSubmitting(false);
           }, 400);

            
         
         }}
       >
         {({
           values,
           errors,
           touched,
           handleChange,
           handleBlur,
           handleSubmit,
           isSubmitting,
           /* and other goodies */
         }) => (
          
           <form onSubmit={handleSubmit} >
            { this.state.status &&  
              <div>
                  <FlashMessage duration={5000}>
                      <strong>{this.state.userData.message}</strong>
                  </FlashMessage>
              </div>
            }
            <div className="form-group ">
              <h4><label for="exampleInputEmail1">Email address</label></h4>
              <input type="email"  onChange={handleChange}
               onBlur={handleBlur} name="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              <div class="invalid-feedback">
              {errors.email && touched.email && errors.email}
              </div>
              </div>
            <div className="form-group ">
              <h4><label for="exampleInputPassword1">Password</label></h4>
              <input type="password"  onChange={handleChange}
               onBlur={handleBlur} name="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
               <div class="invalid-feedback">
              {errors.password && touched.password && errors.password}
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary"  disabled={isSubmitting}>Submit</button>
          </form>
         )}
       </Formik>
       </div>

    );
    }
}
 
 
 export default LoginCompany;

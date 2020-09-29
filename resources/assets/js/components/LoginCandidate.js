 import { Formik } from 'formik';
 import React, { Component } from 'react';
 
 class  LoginCandidate extends Component {
    render() {
        return (
       <div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
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
        
         <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label for="Name">Company Name</label>
            <input type="text"  onChange={handleChange}
             onBlur={handleBlur} name="name" className="form-control"  placeholder="Enter Company Name " />
             <div class="invalid-feedback">
              {errors.email && touched.email && errors.email}
            </div>
          </div>
          <div className="form-group">
            <label for="Location">Location</label>
            <input type="text"  onChange={handleChange}
             onBlur={handleBlur} className="form-control"  placeholder="Enter Location Name " />
            <small id="location" name="location" className="form-text text-muted">eg. HouseNo/Street/Landmark/City/Country </small>
            <div class="invalid-feedback">
              {errors.email && touched.email && errors.email}
            </div>
          </div>
          <div className="form-group">
            <label for="Contact">Contact</label>
            <input type="number"  onChange={handleChange}
             onBlur={handleBlur} name="contact" className="form-control"  placeholder="8821132431" />
             <div class="invalid-feedback">
              {errors.email && touched.email && errors.email}
            </div>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email"  onChange={handleChange}
             onBlur={handleBlur} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            <div class="invalid-feedback">
              {errors.email && touched.email && errors.email}
            </div>
            </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password"  onChange={handleChange}
             onBlur={handleBlur} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
             <div class="invalid-feedback">
              {errors.email && touched.email && errors.email}
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
 
 
 export default LoginCandidate;

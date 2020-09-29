 import { Formik } from 'formik';
 import React, { Component } from 'react';
 
 class  LoginCompany extends Component {
    render() {
        return (
       <div>
     <h1>Anywhere in your app!</h1>
     <Formik
       initialValues={{ email: '', password: '',name:'', location:'',contact:'' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Email is required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }

         if (!values.name) {
           errors.name = 'name is required';
         } 

         if (!values.location) {
           errors.location = 'location is required';
         } else if (
           !/^[a-z\d]+(?:\/[a-z\d]+)+$/i.test(values.email)
         ) {
           errors.location = 'location should be colony/name/city';
         }

         if (!values.contact) {
           errors.contact = 'location is required';
         } else if (
           /^\d{10}$/.test(values.email)
         ) {
           errors.contact = 'only numeric 10 digit mobile no allowed';
         }

         if (!values.password) {
           errors.contact = 'password is required';
         } else if (
           /^[A-Za-z]\w{7,14}$/.test(values.email)
         ) {
           errors.password = ' 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter';
         }

         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values));
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
              {errors.name && touched.name && errors.name}
            </div>
          </div>
          <div className="form-group">
            <label for="Location">Location</label>
            <input type="text"  name="location" onChange={handleChange}
             onBlur={handleBlur} className="form-control"  placeholder="Enter Location Name " />
            <small id="location"  className="form-text text-muted">eg. HouseNo/Street/Landmark/City/Country </small>
            <div class="invalid-feedback">
              {errors.location && touched.location && errors.location}
            </div>
          </div>
          <div className="form-group">
            <label for="Contact">Contact</label>
            <input type="number"  onChange={handleChange}
             onBlur={handleBlur} name="contact" className="form-control"  placeholder="8821132431" />
             <div class="invalid-feedback">
              {errors.contact && touched.contact && errors.contact}
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

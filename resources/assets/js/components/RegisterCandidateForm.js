import { Formik } from 'formik';
import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
 
 class  RegisterCandidateForm extends Component {
    constructor() {
   
    super();
    //Initialize the state in the constructor
    this.state = {
        userData: [],
        status:false,
    }
  }

   renderElement(){
	   if(this.state.status){
	      return <Redirect 
            to={{
            pathname: '/DashboardStudent',
            state: { userdata: this.state.userData }
   	     }} />;
   	 }else{
   	     	 return null;
   	     }
	}

    render() {
        return (

         <div>

         <div>{ this.renderElement() }</div>
	     <Formik
	        initialValues={{ email: '', password: '',name:'', location:'',contact:'',skills:'' }}
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
	           !/^[a-z\d]+(?:\/[a-z\d]+)+$/i.test(values.location)
	         ) {
	           errors.location = 'location should be colony/name/city';
	         }

	         if (!values.skills) {
	           errors.skills = 'skills is required';
	         } else if (
	           !/^[a-z\d]+(?:\,[a-z\d]+)+$/i.test(values.location)
	         ) {
	           errors.skills = 'location should be c++,python,java';
	         }

	         if (!values.contact) {
	           errors.contact = 'contact is required';
	         } else if (
	           /^\d{10}$/.test(values.contact)
	         ) {
	           errors.contact = 'should be valid digit mobile no allowed';
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
	           
			fetch(window.location.origin+"/api/register" , {
		      method: 'POST',
		      headers: {
		        'Content-Type': 'application/json',
		      },
		      body: JSON.stringify(values)
		    }).then(response => {
            return response.json();
		        })
		        .then(data => {
		            //Fetched product is stored in the state
		            localStorage.setItem('itemName', data.token);
		            this.setState({ userData: data.user });
		            this.setState({ status: true});
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
	          <div className="form-group ">
	            <h4><label for="Name">Company Name</label></h4>
	            <input type="text"  onChange={handleChange}
	             onBlur={handleBlur} name="name" className="form-control form-control-lg"  placeholder="Enter Company Name " />
	             <div class="invalid-feedback">
              {errors.name && touched.name && errors.name}
	            </div>
	          </div>
	          
	          <div className="form-group ">
	            <h4><label for="Location">Location</label></h4>
	            <input type="text" name="location"  onChange={handleChange}
	             onBlur={handleBlur} className="form-control form-control-lg"  placeholder="Enter Location Name " />
	            <small id="location"  className="form-text text-muted">eg. HouseNo/Street/Landmark/City/Country </small>
	            <div class="invalid-feedback">
              {errors.location && touched.location && errors.location}
	            </div>
	          </div>
	          <div className="form-group ">
	            <h4><label for="Contact">Contact</label></h4>
	            <input type="number"  onChange={handleChange}
	             onBlur={handleBlur} name="contact" className="form-control form-control-lg"  placeholder="8821132431" />
	             <div class="invalid-feedback">
              {errors.contact && touched.contact && errors.contact}
	            </div>
	          </div>
	          <div className="form-group ">
	            <h4><label for="Contact">Contact</label></h4>
	            <input type="text"  onChange={handleChange}
	             onBlur={handleBlur} name="skills" className="form-control form-control-lg"   />
	             <div class="invalid-feedback">
              {errors.skills && touched.skills && errors.skills}
	            </div>
	          </div>
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
 
 
 export default RegisterCandidateForm;
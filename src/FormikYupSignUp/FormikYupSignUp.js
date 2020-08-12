import React from "react";
import { Formik } from "formik";
const FormikYupSignUp = () => {
    const handleChange = () => console.log("e");
    const handleSubmit = (values) => {
        console.log(values);
      }
  return (
    <Formik
      initialValues={{ email: "" }}
      onSubmit={(values)=>handleSubmit(values)}
    >
      {(props) => {
        const { handleSubmit } = props;
        return (
          <div className='w-50 m-auto'>
      <h3 className='d-flex justify-content-center pt-3'>Sign Up</h3>
      <form
        onSubmit={handleSubmit}
        className=" d-flex flex-column jumbotron justify-content-center align-items-center"
        noValidate
      >
        <div className="form-group w-50">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="form-control"
            // value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group w-50">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="form-control"
            // value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group w-50">
          <label htmlFor="confirmPassword">Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            className="form-control"
            // value={confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
        );
      }}
    </Formik>
  );
};
export default FormikYupSignUp;

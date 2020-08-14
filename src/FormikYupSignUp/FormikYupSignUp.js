import React from "react";
import { Formik } from "formik";
const FormikYupSignUp = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  const renderSignUpForm = (props) => {
    console.log(props);
    const { handleChange, handleSubmit, values } = props;
    return (
      <div className="w-50 m-auto">
        <h3 className="d-flex justify-content-center pt-3">Sign Up</h3>
        <form
          onSubmit={handleSubmit}
          className=" d-flex flex-column jumbotron justify-content-center align-items-center"
          noValidate
        >
          <div className="form-group ">
            <div className="form-group ">
              <label htmlFor="confirmPassword">user name</label>
              <input
                type="text"
                id="userName"
                className="form-control"
                value={values.userName}
                onChange={handleChange}
              />
            </div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={props.values.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    );
  };
  return (
    <Formik
      initialValues={{ userName: "", email: "", password: "" }}
      onSubmit={(values) => handleSubmit(values)}
    >
      {(props) => renderSignUpForm(props)}
    </Formik>
  );
};
export default FormikYupSignUp;

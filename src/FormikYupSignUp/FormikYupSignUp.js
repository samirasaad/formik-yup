import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
const FormikYupSignUp = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  const renderSignUpForm = (props) => {
    console.log(props);
    const { handleChange, handleSubmit, values, errors, touched } = props;
    return (
      <div className="w-50 m-auto">
        <h3 className="d-flex justify-content-center pt-3">Sign Up</h3>
        <form
          onSubmit={handleSubmit}
          className=" d-flex flex-column jumbotron justify-content-center align-items-center"
          noValidate
        >
          <div className="form-group mb-0">
            <label htmlFor="confirmPassword">user name</label>
            <input
              type="text"
              id="userName"
              className="form-control"
              value={values.userName}
              onChange={handleChange}
            />
            {errors.userName && touched.userName && (
              <small className="text-danger">{errors.userName}</small>
            )}
          </div>
          <div className="form-group mb-0">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && touched.email && (
              <small className="text-danger mb-2">{errors.email}</small>
            )}
          </div>
          <div className="form-group mb-0">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={props.values.password}
              onChange={handleChange}
            />
            {errors.password && touched.password && (
              <small className="text-danger">{errors.password}</small>
            )}
          </div>
          <button type="submit" className="btn btn-primary mt-4">
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
      validationSchema={Yup.object().shape({
        userName: Yup.string().required("Required"),
        email: Yup.string().email().required("Required"),
        password: Yup.string()
          .min(8, "password should be at least 8 charcters")
          .required(  ),
      })}
    >
      {(props) => renderSignUpForm(props)}
    </Formik>
  );
};
export default FormikYupSignUp;

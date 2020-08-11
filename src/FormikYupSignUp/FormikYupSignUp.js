import React from "react";
import { Formik } from "formik";
import "./FormikYupSignUp.scss";
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
          <form className="m-auto w-50 " onSubmit={handleSubmit}>
            <label className="mx-2 font-weight-bold">Email</label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              className="w-75"
              onChange={handleChange}
            />
            <button type="submit" className="d-block m-auto">
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  );
};
export default FormikYupSignUp;

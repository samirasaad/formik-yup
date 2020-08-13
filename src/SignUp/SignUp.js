import React, { Component } from "react";
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      SignUpForm: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      errors: {
        emailHasRequiredErr: false,
      },
    };
  }
  handleChange = (e) => {
    const {
      SignUpForm,
      errors,
      errors: { emailHasRequiredErr },
    } = this.state;
    switch (e.target.id) {
      case "email":
        this.setState({ SignUpForm: { ...SignUpForm, email: e.target.value } });
        break;
      case "password":
        this.setState({
          SignUpForm: { ...SignUpForm, password: e.target.value },
        });
        break;
      case "confirmPassword":
        this.setState({
          SignUpForm: { ...SignUpForm, confirmPassword: e.target.value },
        });
        break;
      default:
        return;
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.SignUpForm);
  };
  render() {
    const {
      SignUpForm: { email, password, confirmPassword },
    } = this.state;
    return (
      <div className='w-50 m-auto'>
      <h3 className='d-flex justify-content-center pt-3'>Sign Up</h3>
      <form
        onSubmit={this.handleSubmit}
        className=" d-flex flex-column jumbotron justify-content-center align-items-center"
        noValidate
      >
        <div className="form-group ">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="confirmPassword">confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control"
            value={confirmPassword}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    );
  }
}
export default SignUp;

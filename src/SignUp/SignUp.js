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
        default:return
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
      <form onSubmit={this.handleSubmit} className="w-25 m-auto" noValidate>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="form-control"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            className="form-control"
            value={confirmPassword}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
export default SignUp;

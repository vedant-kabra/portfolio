import React, { Component, Fragment } from "react";
import data from "../data.json";
import "./About.css";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.aboutData,
    };
  }
  render() {
    var name = this.state.data.name;
    var bio = this.state.data.bio;
    var street = this.state.data.street;
    var city = this.state.data.city;
    var state = this.state.data.state;
    var pin = this.state.data.pin;
    var phone = this.state.data.phone;
    var email = this.state.data.email;
    var imageAddress = this.state.data.imageAddress;

    return (
      <div className="bg-secondary min-vh-100 p-5 container-fluid">
        <div className="row">
          <div className="col-3">
            <img src={imageAddress} class="img-fluid img-thumbnail" alt="" />
          </div>
          <div className="col-2"></div>
          <div className="col">
            <h1 className="text-light text-shadow mb-5">About Me</h1>
            <p className="address h4">{bio}</p>
            <h1 className="text-light text-shadow my-5">Contact Details</h1>
            <p className="address h4">
              <span>{name}</span>
              <br />
              <span>
                {street}
                <br />
                {city} {state}, {pin}
              </span>
              <br />
              <span>{phone}</span>
              <br />
              <span>{email}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

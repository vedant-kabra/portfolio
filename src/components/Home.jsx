import React, { Component, Fragment } from "react";
import data from "../data.json";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.homeData,
      socials: data.socials,
    };
  }

  nameRow() {
    this.firstName = this.state.data.firstName;
    this.middleName = this.state.data.middleName;
    this.lastName = this.state.data.lastName;
    this.name = "";

    if (this.firstName) {
      this.name += this.firstName + " ";
    }
    if (this.middleName) {
      this.name += this.middleName + " ";
    }
    if (this.lastName) {
      this.name += this.lastName;
    }

    return (
      <p className="display-2 font-weight-bold text-shadow text-white">
        {`Hi, I am ${this.name}.`}
      </p>
    );
  }

  descriptionRows() {
    return (
      <p className="h2 p-2 mx-5 text-shadow text-light">
        {this.state.data.briefDescription} {this.state.data.homePageDescription}
      </p>
    );
  }

  socials() {
    var socials = this.state.socials.map((social) => {
      return (
        <li key={social.name}>
          <a href={social.accountUrl}>
            <i className={social.className}></i>
          </a>
        </li>
      );
    });
    return socials;
  }

  render() {
    this.style = {
      backgroundImage: `url(${this.state.data.backgroundImage})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    return (
      <div
        className="home-section text-center py-5 align-items-center"
        style={this.style}
      >
        <div className="px-5 mx-5">
          {this.nameRow()}
          {this.descriptionRows()}
          <ul className="mt-5 p-0 socials justify-content-between">{this.socials()}</ul>
        </div>
      </div>
    );
  }
}

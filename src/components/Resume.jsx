import React, { Component, Fragment } from "react";
import data from "../data.json";
import "./Resume.css";
import Plot from "react-plotly.js";

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.resumeData,
    };
  }

  education() {
    if (this.state.data.education) {
      var education = this.state.data.education.map((education) => {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p>
              {education.degree} &bull; <em>{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });

      return education;
    }
  }

  experience() {
    if (this.state.data.experience) {
      let experience = this.state.data.experience.map(function (experience) {
        return (
          <div key={experience.company}>
            <h3>{experience.company}</h3>
            <p>
              {experience.title}
              <span>&bull;</span> <em>{experience.years}</em>
            </p>
            <p>{experience.description}</p>
          </div>
        );
      });
      return experience;
    }
  }

  skills() {
    if (this.state.data.skills) {
      let labels = this.state.data.skills.map((skill) => {
        return skill.name;
      });
      let values = this.state.data.skills.map((skill) => {
        return skill.level;
      });
      let chartData = [
        {
          type: "bar",
          x: labels,
          y: values,
        },
      ];
      console.table(labels)
      return (
        <Plot
          data={[
            { type: "pie", labels: labels, values: values },
          ]}
        />
      );
    }
  }

  render() {
    return (
      <div className="container py-5 bg-warning">
        <div className="row">
          <div className="col-3 text-muted font-weight-bold h1">
            <span className="underline border-info">Education</span>
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">{this.education()}</div>
        </div>
        <div className="row">
          <div className="col-3 text-muted font-weight-bold h1">
            <span className="underline border-info">Experience</span>
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">{this.experience()}</div>
        </div>
        <div className="row">
          <div className="col-3 text-muted font-weight-bold h1">
            <span className="underline border-info">Skills</span>
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">{this.skills()}</div>
        </div>
      </div>
    );
  }
}

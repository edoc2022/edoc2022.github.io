import { Link } from 'gatsby';
import React, { Component } from 'react';

export default class Workshop extends Component {
  constructor(props) {
    super(props);
  }

  // TODO: use Scroll to move to the top of the page when clicking on "EDOC 2022" from the homepage
  render() {
    return (
      <div id={this.props.id} className="row">
        <div className="col-lg-8 mx-auto">
          <h2 className="mx-auto my-0 text-uppercase text-center">
            {this.props.title}
          </h2>

          <br />
          <br />
          <br />

          <p className="text-black text-justify">
            {this.props.description}
          </p>

          <ul>
            <li>Workshop: {this.props.workshopLink}</li>
            <li>Submissions: {this.props.submissionLink}</li>
          </ul>
        </div>
      </div>
    );
  }
}

import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Helmet>
          <title>FFXIV Wiki</title>
        </Helmet>
        <section className="section home-content">
          <div className="container">
            <p className="latest-info">
              <Link to="/" className="button">
                View Latest Patch Information
              </Link>
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default Home;

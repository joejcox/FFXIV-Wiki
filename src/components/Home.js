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
            <p className="latest-info is-text-center">
              To keep up to date with the latest FFXIV changes please{" "}
              <Link to="/">view the latest patch notes</Link>
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default Home;

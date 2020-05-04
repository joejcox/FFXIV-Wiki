import React from "react";
import "./Profile.css";
import CharPanel from "./CharPanel";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      API_KEY:
        "95595170266e4b8fabc39643fe9599b1f0387ca3d7b9467696a6cf58804acbd7",
      loaded: false,
    };
  }

  componentDidMount() {
    if (!this.state.loaded) {
      this.getBasicInfo();
    }
  }

  async getBasicInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    const server = urlParams.get("server");
    let charName;
    let charServer;
    let id;

    const res = await fetch(
      `https://xivapi.com/character/search?name=${name}&server=${server}`
    );

    const data = await res.json();
    if (data.Results[0] === undefined) {
      console.log("ERROR!");
      this.setState({
        error: true,
        loaded: true,
        name: name,
        server: server,
      });
    } else {
      charName = data.Results[0].Name;
      charServer = data.Results[0].Server;
      id = data.Results[0].ID;

      const charInfo = await fetch(`https://xivapi.com/character/${id}`);
      const charData = await charInfo.json();

      console.log(charData);

      await this.setState({
        name: charName,
        server: charServer,
        id: id,
        character: {
          portrait: charData.Character.Portrait,
        },
        loaded: true,
      });
    }
  }

  render() {
    let results;
    if (!this.state.error) {
      const { name, server, id, character, loaded } = this.state;
      loaded
        ? (results = (
            <CharPanel
              name={name}
              server={server}
              id={id}
              portrait={character.portrait}
              error="false"
            />
          ))
        : (results = (
            <section className="section is-medium is-text-center">
              <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </section>
          ));
    } else {
      const { name, server } = this.state;
      results = (
        <CharPanel
          name={name}
          server={server}
          id={null}
          portrait={null}
          error={true}
        />
      );
    }

    return (
      <>
        <section className="section is-text-center">
          <div className="container">{results}</div>
        </section>
      </>
    );
  }
}

export default Profile;

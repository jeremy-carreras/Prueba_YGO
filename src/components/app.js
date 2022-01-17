import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { showUsers } from "../actions";
import Header from "./header";
import { Button } from 'react-bootstrap'

class App extends Component {
  componentWillMount() {
    this.props.showUsers();
  }

  renderUsersList() {
    return this.props.users.map((user, index) => {
      return (
        <div style={{ width: "20rem" }} key={index} className="m-3">
          <h3>
            {user.name} (${user.card_prices[0].cardmarket_price})
          </h3>
          <p>
            <b>Tipo:</b> {user.type}
          </p>
          <p>Descripción: {user.desc}</p>
          <image
            style={{ width: "19rem" }}
            src={user.card_images[0].image_url}
          ></image>
          <Button className="m-3">Detalles</Button>
        </div>
      );
    });
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Header></Header>
        <div
          className="mt-2"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {this.renderUsersList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.user.list,
  };
}

export default connect(mapStateToProps, { showUsers })(App);

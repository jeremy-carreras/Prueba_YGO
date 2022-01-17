import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="p-5" style={{ backgroundColor: "#000", height: "7rem"}}>
        <h2 className="text-center text-light">Cartas de Yu Gi Oh</h2>
      </div>
    );
  }
}

export default Header;

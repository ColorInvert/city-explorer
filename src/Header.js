//!Depth level 1. child of App.
import React from "react";

class Header extends React.Component {
  render() {

    //header styling rules
    const styling = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: ".5em",
      fontFamily: "Arial",
      width: "100%",
      textAlign: "center",
    };

    return (<h1 style={styling}>City Explorer</h1>)

  }
}

export default Header;
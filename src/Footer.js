import React from "react";

class Footer extends React.Component {
  render() {

    //footer styling rules
    const styling = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: ".5em",
      width: "100%",
      textAlign: "center",
      fontFamily: "Arial",
    };

    return (<p style={styling}>Created by Casey Glidewell</p>)
  }
}

export default Footer;
import React from 'react';

const pTagStyling = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: ".5em",
  fontFamily: "Arial",
  width: "100%",
  textAlign: "center",
};


class Weather extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     weatherData: [],
  //   }
  // }






  render() {
    return (
      <>


        <p style={pTagStyling}>low of PUT LOW HERE high of PUT HIGH HERE with {this.props.datapoint.weatherDescription} date: {this.props.datapoint.weatherDate}</p>

      </>
    );
  };
}
export default Weather;
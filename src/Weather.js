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


        <p style={pTagStyling}>On the date {this.props.datapoint.weatherDate}, this place had a low of {this.props.datapoint.weatherLow} Celsius, a high of {this.props.datapoint.weatherHigh} Celsius, with {this.props.datapoint.weatherDescription}.</p>

      </>
    );
  };
}
export default Weather;
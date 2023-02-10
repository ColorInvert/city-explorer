//!Depth level 2. child of Main.
import React from 'react';
import WeatherDay from './WeatherDay';




class Weather extends React.Component {

  render() {
    
    return (
      <>

        {this.props.weatherData.map(datapoint => < WeatherDay
          datapoint={datapoint}
          key={datapoint._id} />)
        }

      </>
    );
  };
}
export default Weather;
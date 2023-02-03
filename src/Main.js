
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
import axios from "axios";
import Weather from './Weather'
import Movies from './Movies'
const locationH2Styling = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: ".5em",
  fontFamily: "Arial",
  width: "100%",
  textAlign: "center",
};

const imgTagStyling = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: ".5em",
  fontFamily: "Arial",
  width: "70%",
  textAlign: "center",
};
const pTagStyling = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: ".5em",
  fontFamily: "Arial",
  width: "100%",
  textAlign: "center",
};
const containerStyling = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: ".5em",
  fontFamily: "Arial",
  width: "100%",
  textAlign: "center",
};


class Main extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      displayingInfo: false,
      displayingWeatherInfo: false,
      displayingMoviesInfo: false,
      requestedLocation: '',
      apiData: {},
      restaurantData: [],
      locationData: [],
      weatherData: [],
      moviesData: [],

    };
  };







  //called each time a key is hit in the text entry. Updates the Requested Location state constantly as user types.
  handleKeypress = e => {
    let inputLocation = e.target.value;
    this.setState({
      requestedLocation: inputLocation
    },
      () => console.log(this.state.requestedLocation)
    )
  }


  handleWeather = async (lat, lon) => {

    let weatherUrl = `http://localhost:3001/weather?searchQuery=${this.state.requestedLocation}&lat=${lat}&lon=${lon}`

    // console.log(weatherUrl);

    let weatherResponse = await axios.get(weatherUrl);

    // console.log(weatherResponse);

    this.setState({
      displayingWeatherInfo: true,
      weatherData: weatherResponse.data
    });
  }

  handleMovies = async (e) => {

    let moviesUrl = `http://localhost:3001/movies?searchQuery=${this.state.requestedLocation}`

    console.log(moviesUrl);

    let moviesResponse = await axios.get(moviesUrl);
    console.log(moviesResponse)
    this.setState({
      displayingMoviesInfo: true,
      moviesData: moviesResponse.data
    });

  }

  //This function is an event handler fired when Explore! is clicked.
  handleExplore = async (e) => {

    e.preventDefault();
    let url = `http://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.requestedLocation}&format=json`



    let response = await axios.get(url);

    console.log("PROOF OF LIFE");


    this.setState({
      displayingInfo: true,
      locationData: response.data[0],
      lat: response.data[0].lat,
      lon: response.data[0].lon
    });


    this.handleWeather(response.data[0].lat, response.data[0].lon);


    this.handleMovies()
  };






  render() {
    return (
      <>
        <Container style={containerStyling}>
          <Form>
            <Form.Group>
              <Form.Label>Please enter a city to explore.</Form.Label>
              <Form.Control type="text" onInput={this.handleKeypress} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleExplore}>
              Explore!
            </Button>
          </Form>
        </Container>
        {this.state.displayingInfo &&
          <>
            <h2 style={locationH2Styling}>{this.state.locationData.display_name}</h2>

            <img style={imgTagStyling} alt={'your requested map'} src={`http://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=13`} />

            <p style={pTagStyling}>Latitude:{this.state.locationData.lat}  Longitude:{this.state.locationData.lon}</p>


            <p style={pTagStyling}>Historical forecasts: </p>
            {this.state.weatherData.map(datapoint => <Weather

              datapoint={datapoint}

              key={datapoint._id} />)}

            {this.state.moviesData.map(datapoint => <Movies

              datapoint={datapoint}

              key={datapoint._id} />)}





          </>
        }



      </>
    );
  }
}
export default Main;

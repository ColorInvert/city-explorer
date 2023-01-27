
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
import axios from "axios";

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
      requestedLocation: '',
      apiData: {},
      restaurantData: [],
      locationData: [],
      weatherData: [],

    }
  }







  //called each time a key is hit in the text entry. Updates the Requested Location state constantly as user types.
  handleKeypress = e => {
    let inputLocation = e.target.value;
    this.setState({
      requestedLocation: inputLocation
    },
      () => console.log(this.state.requestedLocation)
    )
  }

  //This function is an event handler fired when Explore! is clicked.
  handleExplore = async (e) => {

    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.requestedLocation}&format=json`



    let response = await axios.get(url);

    console.log("PROOF OF LIFE")
    console.log(response.data[0]);


    this.setState({
      displayingInfo: true,
      locationData: response.data[0],
    })

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

            <img style={imgTagStyling} alt={'your requested map'} src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=13`} />

            <p style={pTagStyling}>Latitude:{this.state.locationData.lat}  Longitude:{this.state.locationData.lon}</p>
          </>
        }



      </>
    );
  }
}
export default Main;

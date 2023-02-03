import React from 'react';

const pTagStyling = {
  color: "white",
  backgroundColor: "red",
  padding: ".5em",
  fontFamily: "Arial",
  width: "100%",
  textAlign: "center",
};


class Movies extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     weatherData: [],
  //   }
  // }






  render() {
    return (
      <>


        <p style={pTagStyling}>there's a film called {this.props.datapoint.title} with the following overview: "{this.props.datapoint.overview}" that was released on {this.props.datapoint.releaseDate} to a popularity score of {this.props.datapoint.popularity}, and a star rating of {this.props.datapoint.averageVotes} stars out of 10, with a total vote count of {this.props.datapoint.totalVotes}. {this.props.datapoint.imgUrl}</p>

      </>
    );
  };
}
export default Movies;
//!Depth level 3. child of Movies.
import React from 'react';



const pTagStyling = {
  color: "white",
  backgroundColor: "red",
  padding: ".5em",
  fontFamily: "Arial",
  width: "100%",
  textAlign: "center",
};


class SingleMovie extends React.Component {




  render() {
    return (
      <>

        <p style={pTagStyling}>there's a film called {this.props.datapoint.title} with the following overview: "{this.props.datapoint.overview}" that was released on {this.props.datapoint.releaseDate} to a popularity score of {this.props.datapoint.popularity}, and a star rating of {this.props.datapoint.averageVotes} stars out of 10, with a total vote count of {this.props.datapoint.totalVotes}. </p>
        <img alt='poster' src={`https://image.tmdb.org/t/p/w500/${this.props.datapoint.imgUrl}`}/>


      </>
    );
  };

};

export default SingleMovie;
//!Depth level 2. child of Main.
import React from 'react';
import SingleMovie from './SingleMovie';



class Movies extends React.Component {





  render() {

    console.log(this.props.moviesData)
    return (
      <>

        {this.props.moviesData.map(datapoint => < SingleMovie
          datapoint={datapoint}
          key={datapoint._id} />)
        }


      </>
    );
  };
}
export default Movies;
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './SingleSeries.styles';
import { useParams } from "react-router-dom";
import Loader from '../../../components/Loader/Loader';

export default function SingleSeries() { 
  
  const [show, setShow] = useState(null);
  let params = useParams();

  useEffect(() => {
    fetch(`http://api.tvmaze.com/shows/${params.id}?embed=episodes`)
            .then(response => response.json())
            .then(json => setShow(json));
  });

  return (
    <div className="SingleSeriesWrapper">
      {
        show === null && <Loader/>
      }
      {
        show !== null && 
        <div>
          <p>{show.name}</p>
          <p>Premired: {show.premiered}</p>
          <p>Rating: {show.rating.average}</p>
          <p>Episodes: {show._embedded.episodes.length}</p>
          <p>
            <img alt="show" src={show.image.medium}></img>
          </p>
        </div>
      }
      <p>Single Series {params.id}</p>
    </div>
  );
}

SingleSeries.propTypes = {
  // bla: PropTypes.string,
};

SingleSeries.defaultProps = {
  // bla: 'test',
};



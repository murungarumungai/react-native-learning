import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './SeriesList.styles';
import './index.css';
import { Link } from 'react-router-dom'

class SeriesList extends PureComponent { 
  
  constructor(props) {
    super(props);

    console.log(`props `, props);
    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('SeriesList will mount');
  }

  componentDidMount = () => {
    console.log('SeriesList mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('SeriesList will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('SeriesList will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('SeriesList did update');
  }

  componentWillUnmount = () => {
    console.log('SeriesList will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    const SeriesListItem = ({series}) => {
      return (
        <li>
          <Link to={`/series/${series.show.id}`}>{series.show.name}</Link>
        </li>
      )
    }

    /* const SeriesListItem = ({series}) => {
      return (
        <li key={series.show.id}><a href={series.show.url}>{series.show.name} target="_blank"</a></li>
      )
    } */

    return (
      <div className="SeriesListWrapper">
        <ul className="series-list">
          {this.props.list.map(series => (
            <SeriesListItem series={series} key={series.show.id}/>
          ))}
        </ul>
      </div>
    );
  }
}

SeriesList.propTypes = {
  // bla: PropTypes.string,
};

SeriesList.defaultProps = {
  // bla: 'test',
};

export default SeriesList;

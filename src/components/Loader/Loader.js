import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Loader.styles';
import loaderSrc from '../../assets/loader.gif';

class Loader extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Loader will mount');
  }

  componentDidMount = () => {
    console.log('Loader mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Loader will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Loader will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Loader did update');
  }

  componentWillUnmount = () => {
    console.log('Loader will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="LoaderWrapper">
        <img src={loaderSrc} alt="Loader Icon"></img>
      </div>
    );
  }
}

Loader.propTypes = {
  // bla: PropTypes.string,
};

Loader.defaultProps = {
  // bla: 'test',
};

export default Loader;

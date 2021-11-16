import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Main.styles';
import { Routes, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/Series/SingleSeries/SingleSeries';

class Main extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Main will mount');
  }

  componentDidMount = () => {
    console.log('Main mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Main will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Main will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Main did update');
  }

  componentWillUnmount = () => {
    console.log('Main will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="MainWrapper">
        <Routes>
          <Route exact path="/" element={<Series/>}></Route>
          <Route exact path="/series/:id" element={<SingleSeries/>}></Route>
        </Routes>
      </div>
    );
  }
}

Main.propTypes = {
  // bla: PropTypes.string,
};

Main.defaultProps = {
  // bla: 'test',
};

export default Main;

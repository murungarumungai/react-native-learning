import { Component } from "react";
import SeriesList from "../../components/SeriesList/SeriesList";
import Loader from "../../components/Loader/Loader";
import Intro from "../../components/Intro/Intro";

class Series extends Component {

    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }

    /*componentDidMount() {
        /* const series = ["The Chosen", "24"];
    
        setTimeout(() => {
          this.setState({series: series})
        }, 2000); */

        /* fetch('http://api.tvmaze.com/search/shows?q=24')
            .then(response => response.json())
            .then(json => this.setState({ series: json })) 
    }*/

    onSeriesInputChange = e => {

        this.setState({ seriesName: e.target.value, isFetching: true });

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then(response => response.json())
            .then(json => this.setState({ series: json, isFetching: false }));
    }

    render() {
        
        const { series, seriesName, isFetching } = this.state;

        return (
            <div>
                <Intro message = "Yeeeiy" />
                Series length {this.state.series.length}
                <div>
                    <input value={seriesName} type="text" onChange={this.onSeriesInputChange}/>
                </div>
                { 
                    !isFetching && series.length === 0 && seriesName.trim() === '' &&
                    <p>Please Enter series to search</p>
                }

                { 
                    !isFetching &&  series.length === 0 && seriesName.trim() !== '' &&
                    <p>No series found with name {seriesName}</p>
                }
                {
                    isFetching === true && <Loader/>
                }
                { !isFetching && <SeriesList list={this.state.series}/> }
            </div>
        )
    }
}

export default Series;
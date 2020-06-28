import React, {Component} from 'react';
import SeriesCardList from '../general/card-lists/SeriesCardList';
import utils from '../utils';

class Series extends Component {
    constructor() {
        super();
        this.state = {
            series: ''
        };
        this.url = utils.getUrl();
    };

    componentDidMount() {
        fetch(`${this.url}/marvel/series`)
        .then(res => res.json())
        .then(series => {
            const {results} = series.data.data;
            console.log(results);
            
            this.setState({
                series: results
            });
        });
    };

    render() {
        const {series} = this.state;
        return (
            <div>
                <SeriesCardList series={series} />
            </div>
        );
    };
};

export default Series;
import React, {Component} from 'react';
import SeriesCardList from '../general/card-lists/SeriesCardList';
import utils from '../utils';
import Banner from '../general/Banner';
import SetHeight from '../general/hoc/setHeight';

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
                <SetHeight wrappedComponent={
                    <Banner 
                        color="orange" 
                        start={false} 
                        header="Series" 
                        text="A collection of Marvel's countless series along with descriptions and information regarding characters and creators."
                        name="iron-man"
                        button={false}
                    />
                } height="50vh" />
                <SeriesCardList series={series} />
            </div>
        );
    };
};

export default Series;
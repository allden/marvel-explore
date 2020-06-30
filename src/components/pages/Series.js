import React, {Component} from 'react';
import SeriesCardList from '../general/card-lists/SeriesCardList';
import utils from '../utils';
import Banner from '../general/Banner';
import SetHeight from '../general/hoc/setHeight';
import Loader from '../general/Loader';

class Series extends Component {
    constructor() {
        super();
        this.state = {
            series: '',
            page: 0,
            limit: 20,
            total: ''
        };
        this.url = utils.getUrl();
    };

    nextPage = () => {
        const {page, total} = this.state;
        const next = page + 1;
        if(page < total) {
            this.setState({page: next}, this.fetchData);
        };
    };

    previousPage = () => {
        const {page} = this.state;
        const previous = page - 1;
        if(page > 0) {
            this.setState({page: previous}, this.fetchData);
        };
    };

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        const {page, limit} = this.state;
        const offset = page * limit;
        const query = utils.createQuery(limit, offset);

        fetch(`${this.url}/marvel/series?${query}`)
        .then(res => res.json())
        .then(series => {
            const {results, total} = series.data.data;
            
            this.setState({
                series: results,
                total
            });
        });
    };

    render() {
        const {series} = this.state;
        const seriesList = series.length > 0 ?
        <SeriesCardList nextPage={this.nextPage} previousPage={this.previousPage} series={series} />
        : <Loader />
        return (
            <div className="vh-100 d-flex flex-col">
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
                {seriesList}
            </div>
        );
    };
};

export default Series;
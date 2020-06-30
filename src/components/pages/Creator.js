import React, {Component} from 'react';
import SeriesCardList from '../general/card-lists/SeriesCardList';
import ComicCardList from '../general/card-lists/ComicCardList';
import utils from '../utils';
import Divider from '../general/Divider';
import Profile from '../general/Profile';

class Creator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creator: '',
            series: '',
            comics: '',
            limit: 99
        };

        this.url = utils.getUrl();
    };

    componentDidMount() {
        const {limit} = this.state;
        const query = utils.createQuery(limit);

        const {id} = this.props.match.params;

        const creatorUrl = `${this.url}/marvel/creators/${id}?${query}`;
        const creatorSeriesUrl =`${this.url}/marvel/creators/${id}/series?${query}`;
        const creatorComicsUrl = `${this.url}/marvel/creators/${id}/comics?${query}`;

        const fetchArr = [creatorUrl, creatorSeriesUrl, creatorComicsUrl];

        Promise.all(
            fetchArr.map(url => {
                return fetch(url).then(res => res.json());
            })
        ).then(dataArr => {
              const [creatorData, seriesData, comicsData] = dataArr;
              const creator = creatorData.data.data.results[0];
              const series = seriesData.data.data.results;
              const comics = comicsData.data.data.results;

              this.setState({
                creator,
                series,
                comics
              });
        });
    };

    render() {
        const {creator, series, comics} = this.state;

        const seriesSection = series.length > 0 ? (
            <div>
                <Divider color="orange" title="Series" />
                <SeriesCardList series={series} />
            </div>
        ) : null;

        const comicsSection = comics.length > 0 ? (
            <div>
                <Divider color="green" title="Comics" />
                <ComicCardList comics={comics} />
            </div>
        ) : null;

        return (
            <div className="vh-100 d-flex flex-col">
                <Profile data={creator} type="creators" />
                {seriesSection}
                {comicsSection}        
            </div>
        );
    };
};

export default Creator;
import React, {Component} from 'react';
import SeriesCardList from '../general/card-lists/SeriesCardList';
import ComicCardList from '../general/card-lists/ComicCardList';
import utils from '../utils';

class Creator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creator: '',
            series: '',
            comics: ''
        };

        this.url = utils.getUrl();
    };

    componentDidMount() {
        const {id} = this.props.match.params;

        const creatorUrl = `${this.url}/marvel/creators/${id}`;
        const creatorSeriesUrl =`${this.url}/marvel/creators/${id}/series`;
        const creatorComicsUrl = `${this.url}/marvel/creators/${id}/comics`;

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
        const {fullName, firstName, thumbnail} = creator;
        const imgSrc = utils.formatImgSrc(thumbnail);

        return (
            <div>
                <h1>{fullName || firstName}</h1>
                <img src={imgSrc} alt={`Portrait of ${fullName || firstName}`}/>
                <h2>Series</h2>
                <SeriesCardList series={series} />
                <h2>Comics</h2>
                <ComicCardList comics={comics} />
            </div>
        );
    };
};

export default Creator;
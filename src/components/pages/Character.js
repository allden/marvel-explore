import React, {Component} from 'react';
import ComicCardList from '../general/card-lists/ComicCardList';
import SeriesCardList from '../general/card-lists/SeriesCardList';
import utils from '../utils';
import Divider from '../general/Divider';
import Profile from '../general/Profile';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: '',
            comics: '',
            series: '',
            limit: 99
        };
        this.url = utils.getUrl();
    };

    componentDidMount() {
        const {limit} = this.state;
        const query = utils.createQuery(limit);

        const {id} = this.props.match.params;
        const characterUrl = `${this.url}/marvel/characters/${id}?${query}`;
        const characterComicUrl = `${this.url}/marvel/characters/${id}/comics?${query}`;
        const characterSeriesUrl = `${this.url}/marvel/characters/${id}/series?${query}`;
        const fetchArr = [characterUrl, characterComicUrl, characterSeriesUrl];

        Promise.all(
            fetchArr.map(url => fetch(url).then(res => res.json()))
        ).then(dataArr => {
            const [characterResponse, characterComicResponse, characterSeriesResponse] = dataArr;
            
            const character = characterResponse.data.data.results[0];
            const comics = characterComicResponse.data.data.results;
            const series = characterSeriesResponse.data.data.results;

            this.setState({
                character,
                comics,
                series
            });
        });
    };

    render() {
        const {character, comics, series} = this.state;
        let comicSection = comics.length > 0 ? (
            <div>
                <Divider color="green" title="Comics" />
                <ComicCardList comics={comics} />
            </div>
        ) : null;
        let seriesSection = series.length > 0 ? (
            <div>
                <Divider color="orange" title="Series" />
                <SeriesCardList series={series} />
            </div>
        ) : null;

        return (
            <div className="vh-100 d-flex flex-col">
                <Profile data={character} type="characters" />
                {comicSection}
                {seriesSection}
            </div>
        );
    };
};

export default Character;
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
            series: ''
        };
        this.url = utils.getUrl();
    };

    componentDidMount() {
        const {id} = this.props.match.params;
        const characterUrl = `${this.url}/marvel/characters/${id}`;
        const characterComicUrl = `${this.url}/marvel/characters/${id}/comics`;
        const characterSeriesUrl = `${this.url}/marvel/characters/${id}/series`;
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

        return (
            <div>
                <Profile data={character} type="characters" />
                <Divider color="green" title="Comics" />
                <ComicCardList comics={comics} />
                <Divider color="orange" title="Series" />
                <SeriesCardList series={series} />
            </div>
        );
    };
};

export default Character;
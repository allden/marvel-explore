import React, {Component} from 'react';
import ComicCardList from '../general/ComicCardList';
import SeriesCardList from '../general/SeriesCardList';
import utils from '../utils';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: ''
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
        const {name, description, thumbnail} = character;
        const descriptionParagraph = description ? <p>{description}</p> : null;
        const imgSrc = utils.formatImgSrc(thumbnail);

        return (
            <div>
                <img src={imgSrc} alt={`Portrait of ${name}`} />
                <h1>{name}</h1>
                {descriptionParagraph}
                <h2>Comics</h2>
                <ComicCardList comics={comics} />
                <h2>Series</h2>
                <SeriesCardList series={series} />
            </div>
        );
    };
};

export default Character;
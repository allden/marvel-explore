import React, {Component} from 'react';
import CharacterCardList from '../general/card-lists/CharacterCardList';
import CreatorCardList from '../general/card-lists/CreatorCardList';
import utils from '../utils';

class SpecificSeries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: '',
            characters: '',
            creators: ''
        };

        this.url = utils.getUrl();
    };

    componentDidMount() {
        const {id} = this.props.match.params;
        const seriesUrl = `${this.url}/marvel/series/${id}`;
        const seriesCharactersUrl = `${this.url}/marvel/series/${id}/characters`;
        const seriesCreatorsUrl = `${this.url}/marvel/series/${id}/creators`
        const fetchArr = [seriesUrl, seriesCharactersUrl, seriesCreatorsUrl];

        Promise.all(
            fetchArr.map(url => fetch(url).then(res => res.json()))
        ).then(dataArr => {
            const [seriesResponse, seriesCharactersResponse, seriesCreatorsResponse] = dataArr;

            const series = seriesResponse.data.data.results[0];
            const characters = seriesCharactersResponse.data.data.results;
            const creators = seriesCreatorsResponse.data.data.results;

            this.setState({
                series,
                characters,
                creators                
            });
        });
    };

    render() {
        const {series, characters, creators} = this.state;
        const {title, description, thumbnail} = series;
        const imgSrc = utils.formatImgSrc(thumbnail);

        const descriptionParagraph = description ? <p>{description}</p> : null;
        return (
            <div>
                <img src={imgSrc} alt={`Cover of ${title}`} />
                <h1>{title}</h1>
                {descriptionParagraph}
                <h2>Characters</h2>
                <CharacterCardList characters={characters} />
                <h2>Creators</h2>
                <CreatorCardList creators={creators} />
            </div>
        );
    };
};

export default SpecificSeries;
import React, {Component} from 'react';
import CharacterCardList from '../general/card-lists/CharacterCardList';
import CreatorCardList from '../general/card-lists/CreatorCardList';
import utils from '../utils';
import Divider from '../general/Divider';
import Profile from '../general/Profile';

class SpecificSeries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            series: '',
            characters: '',
            creators: '',
            limit: 99
        };

        this.url = utils.getUrl();
    };

    componentDidMount() {
        const {limit} = this.state;
        const query = utils.createQuery(limit);

        const {id} = this.props.match.params;
        const seriesUrl = `${this.url}/marvel/series/${id}?${query}`;
        const seriesCharactersUrl = `${this.url}/marvel/series/${id}/characters?${query}`;
        const seriesCreatorsUrl = `${this.url}/marvel/series/${id}/creators?${query}`;
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

        let charactersSection = characters.length > 0 ? (
            <div>
                <Divider color="red" title="Characters" />
                <CharacterCardList characters={characters} />
            </div>
        ) : null;

        let creatorsSection = creators.length > 0 ? (
            <div>
                <Divider color="violet" title="Creators" />
                <CreatorCardList creators={creators} />
            </div>
        ) : null;

        return (
            <div className="vh-100 d-flex flex-col">
                <Profile data={series} type="series" />
                {charactersSection}
                {creatorsSection}
            </div>
        );
    };
};

export default SpecificSeries;
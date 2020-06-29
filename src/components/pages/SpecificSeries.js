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
            console.log(seriesResponse);

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

        return (
            <div>
                <Profile data={series} type="series" />
                <Divider color="red" title="Characters" />
                <CharacterCardList characters={characters} />
                <Divider color="violet" title="Creators" />
                <CreatorCardList creators={creators} />
            </div>
        );
    };
};

export default SpecificSeries;
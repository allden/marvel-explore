import React, {Component} from 'react';
import CharacterCardList from '../general/card-lists/CharacterCardList';
import CreatorCardList from '../general/card-lists/CreatorCardList';
import utils from '../utils';
import Profile from '../general/Profile';
import Divider from '../general/Divider';

class Comic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comic: '',
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
        const comicPath = `${this.url}/marvel/comics/${id}?${query}`;
        const comicCharactersPath = `${this.url}/marvel/comics/${id}/characters?${query}`;
        const comicCreatorsPath = `${this.url}/marvel/comics/${id}/creators?${query}`;

        const fetchArr = [comicPath, comicCharactersPath, comicCreatorsPath];

        Promise.all(
            fetchArr.map(url => {
                return fetch(url).then(res => res.json());
            })
        ).then(dataArr => {
            // mind the order, as we are destructuring variables to [0], [1] and [2] the way they are ordered in the fetchArr
            const [comicData, charactersData, creatorsData] = dataArr;
            const comic = comicData.data.data.results[0];
            const characters = charactersData.data.data.results;
            const creators = creatorsData.data.data.results;

            this.setState({
                comic,
                characters,
                creators
            });
        });
    };

    render() {
        const {comic, characters, creators} = this.state;

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
                <Profile data={comic} type="comics" />
                {charactersSection}
                {creatorsSection}
            </div>
        );
    };
};

export default Comic;
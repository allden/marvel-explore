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
            creators: ''
        };

        this.url = utils.getUrl();
    };

    componentDidMount() {
        const {id} = this.props.match.params;
        const comicPath = `${this.url}/marvel/comics/${id}`;
        const comicCharactersPath = `${this.url}/marvel/comics/${id}/characters`;
        const comicCreatorsPath = `${this.url}/marvel/comics/${id}/creators`;

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

        return (
            <div>
                <Profile data={comic} type="comics" />
                <Divider color="red" title="Characters" />
                <CharacterCardList characters={characters} />
                <Divider color="violet" title="Creators" />
                <CreatorCardList creators={creators} />
            </div>
        );
    };
};

export default Comic;
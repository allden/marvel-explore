import React, {Component} from 'react';
import CharacterCardList from '../general/CharacterCardList';
import utils from '../utils';

class Character extends Component {
    constructor() {
        super();
        this.state = {
            characters: '',
        };
        this.url = utils.getUrl();
    };

    componentDidMount() {
        fetch(`${this.url}/marvel/characters`)
        .then(res => res.json())
        .then(characters => {
            const {results} = characters.data.data;
            this.setState({
                characters: results
            });
        });
    };

    render() {
        const {characters} = this.state;

        return (
            <div>
                <CharacterCardList characters={characters} />
            </div>
        );
    };
};

export default Character;
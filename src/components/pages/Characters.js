import React, {Component} from 'react';
import CharacterCardList from '../general/card-lists/CharacterCardList';
import SetHeight from '../general/hoc/setHeight';
import Banner from '../general/Banner';
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
                <SetHeight wrappedComponent={<Banner 
                    color="red" 
                    start={true} 
                    header="Characters" 
                    text="Welcome! Here you will find up-to-date information on every Marvel character."
                    name="marvel"
                    button={false}
                />} height="50vh" />
                <div className="item-grid">
                    <CharacterCardList characters={characters} />
                </div>
            </div>
        );
    };
};

export default Character;
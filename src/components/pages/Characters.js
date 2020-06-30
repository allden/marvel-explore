import React, {Component} from 'react';
import CharacterCardList from '../general/card-lists/CharacterCardList';
import SetHeight from '../general/hoc/setHeight';
import Banner from '../general/Banner';
import utils from '../utils';
import Loader from '../general/Loader';

class Character extends Component {
    constructor() {
        super();
        this.state = {
            characters: '',
            page: 0,
            limit: 20,
            total: ''
        };
        this.url = utils.getUrl();
    };

    nextPage = () => {
        const {page, total} = this.state;
        const next = page + 1;
        if(page < total) {
            this.setState({page: next}, this.fetchData);
        };
    };

    previousPage = () => {
        const {page} = this.state;
        const previous = page - 1;
        if(page > 0) {
            this.setState({page: previous}, this.fetchData);
        };
    };

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        const {page, limit} = this.state;
        const offset = page * limit;
        const query = utils.createQuery(limit, offset);
        fetch(`${this.url}/marvel/characters?${query}`)
        .then(res => res.json())
        .then(characters => {
            console.log(characters);
            const {results, total} = characters.data.data;
            this.setState({
                characters: results,
                total
            });
        });
    };

    render() {
        const {characters} = this.state;
        const characterList = characters.length > 0 ? 
        <CharacterCardList nextPage={this.nextPage} previousPage={this.previousPage} characters={characters} /> : 
        <Loader />

        return (
            <div className="vh-100 d-flex flex-col">
                <SetHeight wrappedComponent={<Banner 
                    color="red" 
                    start={true} 
                    header="Characters" 
                    text="Welcome! Here you will find up-to-date information on every Marvel character."
                    name="marvel"
                    button={false}
                />} height="50vh" />
                {characterList}
            </div>
        );
    };
};

export default Character;
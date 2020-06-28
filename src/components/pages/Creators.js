import React, {Component} from 'react';
import utils from '../utils';
import CreatorCardList from '../general/card-lists/CreatorCardList';

class Creators extends Component {
    constructor() {
        super();
        this.state = {
            creators: ''
        };
        this.url = utils.getUrl();
    };

    componentDidMount() {
        const creatorsUrl = `${this.url}/marvel/creators`;
        fetch(creatorsUrl)
        .then(res => res.json())
        .then(jsonRes => {
            const creators = jsonRes.data.data.results;
            this.setState({
                creators
            });
        });
    };

    render() {
        const {creators} = this.state;
        return (
            <div>
                <CreatorCardList creators={creators} />
            </div>
        );
    };
};

export default Creators;
import React, {Component} from 'react';
import utils from '../utils';
import ComicCardList from '../general/card-lists/ComicCardList';

class Comics extends Component {
    constructor() {
        super();
        this.state = {
            comics: ''
        };
        this.url = utils.getUrl();
    };

    componentDidMount() {
        const comicPath = `${this.url}/marvel/comics`;
        fetch(comicPath)
        .then(res => res.json())
        .then(jsonRes => {
            const comics = jsonRes.data.data.results;

            this.setState({
                comics
            });
        });
    };

    render() {
        const {comics} = this.state;

        return (
            <div>
                <ComicCardList comics={comics} />
            </div>
        );
    };
};

export default Comics;
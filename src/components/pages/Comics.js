import React, {Component} from 'react';
import utils from '../utils';
import ComicCardList from '../general/card-lists/ComicCardList';
import Banner from '../general/Banner';
import SetHeight from '../general/hoc/setHeight';

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
                <SetHeight wrappedComponent={<Banner 
                    color="green" 
                    start={true} 
                    header="Comics" 
                    text="Welcome! Here you can find information about the comics, their characters or their creators." 
                    name="she-hulk"
                    button={false}
                />} height="50vh"/>
                <ComicCardList comics={comics} />
            </div>
        );
    };
};

export default Comics;
import React, {Component} from 'react';
import utils from '../utils';
import ComicCardList from '../general/card-lists/ComicCardList';
import Banner from '../general/Banner';
import SetHeight from '../general/hoc/setHeight';
import Loader from '../general/Loader';

class Comics extends Component {
    constructor() {
        super();
        this.state = {
            comics: '',
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

        const comicPath = `${this.url}/marvel/comics?${query}`;
        fetch(comicPath)
        .then(res => res.json())
        .then(jsonRes => {
            const total = jsonRes.data.data.total;
            const comics = jsonRes.data.data.results;

            this.setState({
                comics,
                total
            });
        });
    };

    render() {
        const {comics} = this.state;
        const comicList = comics.length > 0 ?
        <ComicCardList nextPage={this.nextPage} previousPage={this.previousPage} comics={comics} /> :
        <Loader />;

        return (
            <div className="vh-100 d-flex flex-col">
                <SetHeight wrappedComponent={<Banner 
                    color="green" 
                    start={true} 
                    header="Comics" 
                    text="Welcome! Here you can find information about the comics, their characters or their creators." 
                    name="she-hulk"
                    button={false}
                />} height="50vh"/>
                {comicList}
            </div>
        );
    };
};

export default Comics;
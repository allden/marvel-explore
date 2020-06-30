import React, {Component} from 'react';
import utils from '../utils';
import CreatorCardList from '../general/card-lists/CreatorCardList';
import Banner from '../general/Banner';
import SetHeight from '../general/hoc/setHeight';
import Loader from '../general/Loader';

class Creators extends Component {
    constructor() {
        super();
        this.state = {
            creators: '',
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

        const creatorsUrl = `${this.url}/marvel/creators?${query}`;
        fetch(creatorsUrl)
        .then(res => res.json())
        .then(jsonRes => {
            const total = jsonRes.data.data.total;
            const creators = jsonRes.data.data.results;
            this.setState({
                creators,
                total
            });
        });
    };

    render() {
        const {creators} = this.state;
        const creatorList = creators.length > 0 ?
        <CreatorCardList nextPage={this.nextPage} previousPage={this.previousPage} creators={creators} />
        : <Loader />;
        return (
            <div className="vh-100 d-flex flex-col">
                <SetHeight wrappedComponent={
                    <Banner 
                        color="violet" 
                        start={false} 
                        header="Creators" 
                        text="Welcome! Here you'll be able to find all of Marvel's creators and their works." 
                        name="thor"
                        button={false}
                    />
                } height="50vh" />
                {creatorList}
            </div>
        );
    };
};

export default Creators;
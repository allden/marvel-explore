import React, {Component} from 'react';
import utils from '../utils';
import CreatorCardList from '../general/card-lists/CreatorCardList';
import Banner from '../general/Banner';
import SetHeight from '../general/hoc/setHeight';

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
                <CreatorCardList creators={creators} />
            </div>
        );
    };
};

export default Creators;
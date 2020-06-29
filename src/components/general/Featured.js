import React from 'react';
import Banner from './Banner';

function Featured() {
    return (
        <div className="d-flex flex-col h-100">
            <Banner 
                color="red" 
                start={true} 
                header="Characters" 
                text="Marvel Explore features a collection of your favorite characters straight from the Marvel database."
                name="marvel"
            />
            <Banner 
                color="orange" 
                start={false} 
                header="Series" 
                text="We offer a collection of series and information about them including characters, creators and more."
                name="iron-man"
            />
            <Banner 
                color="green" 
                start={true} 
                header="Comics" 
                text="You’re also able to find a variety of comics, new and old." 
                name="she-hulk"
            />
            <Banner 
                color="violet" 
                start={false} 
                header="Creators" 
                text="The real men and women behind the masks, they are the ones responsible for the heroes we know and love today" 
                name="thor"
            />
        </div>
    )
};

export default Featured;
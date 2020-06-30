import React from 'react';

function PaginationNav(props) {
    const {type, nextPage, previousPage} = props;
    let color='';

    if(type === 'creators') color='violet';
    else if(type==='characters') color='red';
    else if(type==='comics') color='green';
    else color='orange';

    return typeof nextPage === 'function' && typeof previousPage === 'function' ? (
            <div className="pagination mx-b d-flex">
                <button onClick={previousPage} className={`btn btn-dark`}>Previous</button>
                <button onClick={nextPage} className={`btn btn-dark`}>Next</button>
            </div>
        ) : null;
};

export default PaginationNav;
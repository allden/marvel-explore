import React from 'react';
import utils from '../utils';
import {Link} from 'react-router-dom';

function Profile(props) {
    const {data, type} = props;
    const {id, thumbnail, description} = data;
    const fullName = data.fullName || '';
    const firstName = data.firstName || '';
    const title = data.title || '';
    const name = data.name || '';

    const descriptionParagraph = description ? <p>{description}</p> : <p>No data is available regarding this.</p>;
    const imgSrc = utils.formatImgSrc(thumbnail)
    
    if(type === 'creators') {
        // creators
        return (
            <div className="d-flex flex-col-mobile">
                <img className="profile-img" src={imgSrc} alt={`Portrait of ${fullName || firstName}`}/>
                <div className="content">
                    <h1>{fullName || firstName}</h1>
                    <hr className="border-bottom border-grey"></hr>
                    {descriptionParagraph}
                </div>
            </div>
        )
    } else if(type === 'characters') {
        // characters
        return (
            <div className="d-flex flex-col-mobile">
                <img className="profile-img" src={imgSrc} alt={`Portrait of ${name}`} />
                <div className="content">
                    <h1>{name}</h1>
                    <hr className="border-bottom border-grey"></hr>
                    {descriptionParagraph}
                </div>
            </div>
        )
    } else {
        // media
        return (
            <div className="d-flex flex-col-mobile">
                <img className="profile-img" src={imgSrc} alt={`Cover of ${title}`}/>
                <div className="content">
                    <h1>{title}</h1>
                    <hr className="border-bottom border-grey"></hr>
                    {descriptionParagraph}
                </div>
            </div>
        )
    };
};

export default Profile;
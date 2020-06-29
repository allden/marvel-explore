import React from 'react';
import utils from '../../utils';
import {Link} from 'react-router-dom';

function Card(props) {
    let {data, type} = props;
    let color = '';

    if(type === 'creators') color='violet';
    else if(type==='characters') color='red';
    else if(type==='comics') color='green';
    else color='orange';

    let name = data.name || '';
    let firstName = data.firstName || '';
    let fullName = data.fullName || '';
    let title = data.title || '';

    const {thumbnail, id} = data;

    const imgSrc = utils.formatImgSrc(thumbnail, 'landscape_incredible');

    if(type==="characters") {
        // characters
        return (
            <div className="card">
                <img className={`border-bottom border-${color} border-l`} src={imgSrc} alt={`Portrait of ${name}`} />
                <div className="card-content d-flex flex-col">
                    <p className="bold">{name}</p>
                    <Link className={`btn btn-${color} mx-b`} to={`/${type}/${id}`}>View</Link>
                </div>
            </div>
        );
    } else if(type==="creators") {
        // creators
        return (
            <div className="card">
                <img className={`border-bottom border-${color} border-l`} src={imgSrc} alt={`Cover of ${fullName || firstName}`} />
                <div className="card-content d-flex flex-col">
                    <p className="bold">{fullName || firstName}</p>
                    <Link className={`btn btn-${color} mx-b`} to={`/${type}/${id}`}>View</Link>
                </div>
            </div>
        );
    } else {
        // media
        return (
            <div className="card">
                <img src={imgSrc} alt={`${title} cover`} />
                <div className="card-content">
                    <p className="bold">{title}</p>
                    <Link className={`btn btn-${color} mx-b`} to={`/${type}/${id}`}>View</Link>
                </div>
            </div>
        );
    };
};

export default Card;
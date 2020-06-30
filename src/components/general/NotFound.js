import React from 'react';

function NotFound() {
    return (
        <div className="vh-100 d-flex align-center justify-center flex-col">
            <h1 className="bold text-red header">Error 404:</h1>
            <hr className="border-bottom border-red w-50"></hr>
            <p className="lead">Resource not found!</p>
        </div>
    )
};

export default NotFound;
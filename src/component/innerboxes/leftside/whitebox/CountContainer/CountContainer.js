import React from 'react';
import './countContainer.css'

const CountContainer = () => {
    return (
        <div className="countContainer">
            <span className="countInfo tweetCount">15</span>
            <span className="countInfo followingCount">3</span>
            <span className="countInfo followerCount">4</span>
        </div>
    );
}

export default CountContainer;
import React from 'react';
import './countContainer.css'

const CountContainer = () => {
    return (
        <div className="Count_Container">
            <span className="Count_Info TweetCount">15</span>
            <span className="Count_Info FollowingCount">3</span>
            <span className="Count_Info FollowerCount">4</span>
        </div>
    );
}

export default CountContainer;
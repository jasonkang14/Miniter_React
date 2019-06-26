import React from 'react';
import './count_container.css'
import TweetCount from './tweetcount/tweetcount';
import FollowerCount from './followercount/followercount';
import FollowingCount from './followingcount/followingcount';

const CountContainer = () => {
    return (
        <div className="Count_Container">
            <TweetCount />
            <FollowingCount />
            <FollowerCount />
        </div>
    );
}

export default CountContainer;
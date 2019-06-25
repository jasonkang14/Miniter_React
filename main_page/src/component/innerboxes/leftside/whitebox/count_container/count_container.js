import React from 'react';
import './count_container.css'
import TweetCount from './tweetcount/tweetcount';
import FollowerCount from './followercount/followercount';
import FollowingCount from './followingcount/followingcount';

const Count_Container = () => {
    return (
        <div className="Count_Container">
            <TweetCount />
            <FollowingCount />
            <FollowerCount />
        </div>
    );
}

export default Count_Container;
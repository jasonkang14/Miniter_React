import React from 'react';
import './showTweets.css';
import EnterNewTweet from './enterNewtweet/enterNewTweet';


const ShowTweets = () => {
    return (
        <div className="ShowTweets">
            <EnterNewTweet />
        </div>
    );
}


export default ShowTweets;
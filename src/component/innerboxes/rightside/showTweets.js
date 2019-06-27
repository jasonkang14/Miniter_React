import React from 'react';
import './showTweets.css';
import EnterNewTweet from './EnterNewtweet/EnterNewTweet';


const ShowTweets = () => {
    return (
        <div className="ShowTweets">
            <EnterNewTweet />
        </div>
    );
}


export default ShowTweets;
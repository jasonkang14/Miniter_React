import React from 'react';
import './displayTweets.css';
import TweetList from './tweetList/tweetList';

class DisplayTweets extends React.Component {
    
    constructor () {
        super();
    }

    displayGeneratedTweets = () => {
        
    }
    
    render() {
        return (    
            <div className="DisplayTweets">
                <TweetList />
            </div>
        );
    }
}

export default DisplayTweets;   
import React from 'react';
import TweetList from './tweetList/tweetList';
import './displayTweets.css';

class DisplayTweets extends React.Component {
    
    render() {
        return (    
            <div className="DisplayTweets">
                <TweetList 
                    tweet={this.props.el}
                />
                <li>
                    <span className="User">{this.props.tweet.user}</span>
                    <span className="Date">{this.props.tweet.date}</span>
                    <div className="Content">{this.props.tweet.contents}</div>
                </li>
            </div>
        );
    }
}

export default DisplayTweets;   
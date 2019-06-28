import React from 'react';
import './displayTweets.scss';
import Button from '../../../Form/Button';

const DisplayTweets = (props) => {    
    return (    
        <li className="tweetList">
            <span class="btn_wrap">
                <Button 
                    className="editBtn"
                    name="edit"
                    btnClicked={() => {
                        props.editTweet(props.idx);
                    }}
                    innerHTML="edit"
                > 
                </Button>
                <Button 
                    className="deleteBtn"
                    name="delete"
                    btnClicked={() => {
                        props.deleteTweet(props.idx);
                    }}
                    innerHTML="delete"
                > 
                </Button>
            </span>
            <span className="user">{props.tweet.user}</span>
            <span className="date">{props.tweet.date}</span>
            <div className="content">{props.tweet.contents}</div>
        </li>
    );
}

export default DisplayTweets;   
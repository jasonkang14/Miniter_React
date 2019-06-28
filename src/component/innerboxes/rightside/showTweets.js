import React from 'react';
import './showTweets.css';
import Textarea from '../../Form/Textarea'
import Button from '../../Form/Button';
import DisplayTweets from './DisplayTweets/DisplayTweets';
import * as OldTweets from '../../../data/getAllTimeline';

class ShowTweets extends React.Component {

    constructor () {
        super();
        this.state = {
            value: "",
            buttonClicked: false,
            tweetArr: [],
            mode: "generate",
            index: 0
        }
    }

    componentDidMount() {
        
        let previousTweets = OldTweets.default.result;
        this.setState({
            tweetArr: previousTweets 
        })

        // fetch('http://localhost:8000/api/tweet')
        //     .then(
        //         (response) => {
        //             response.json().then((data) => {
        //                 console.log(data);
        //                 this.setState({
        //                     tweetArr: data
        //                 })
        //             });
        //         }
        //     )

    }

    

    getDate = () => {
        let now = new Date();
        let y = now.getFullYear();
        let m = now.getMonth() + 1;
        let d = now.getDate();
        return `${y}${(m < 10 ? '0' : '') + m}${(d < 10 ? '0' : '') + d}`;
    }

    handleInputChange = (event) => {
        this.setState ({
            value: event.target.value
        })
    }

  
    generateNewTweet = () => {
        const newList = this.state.tweetArr.slice();
    
        newList.unshift({
            user : "Jason Kang",
            date : this.getDate(),
            contents : this.state.value
        });

        this.setState({
            tweetArr: newList,
        })
    }
    
    deleteTweet = (idx) => {
        const deleteList = this.state.tweetArr.slice();
        deleteList.splice(idx,1);

        this.setState({
            tweetArr: deleteList
        })
    }

    editTweet = (idx) => {
        this.setState ({
            mode: "update",
            value: this.state.tweetArr[idx].contents
        })
        
        this.setState ({
            index: idx
        })
    }

    updateTweet = () => {
        const updateList = this.state.tweetArr.slice();
        updateList[this.state.index].contents = this.state.value
        this.setState({
            tweetArr: updateList,
            value: "",
            mode: "generate"
        })
    }

    render() {
        return (
            <div className="showTweets">
                <div className="enterNewTweet">
                    <Textarea 
                        className="newMessage" 
                        placeholder="What's happening?" 
                        value={this.state.value}
                        handleInput={this.handleInputChange}
                    />
                    <Button 
                        className="make-btn"
                        name={`${this.state.mode === "generate" ? "makeTweetBtn" : "updateTweetBtn"}`}
                        innerHTML={`${this.state.mode === "generate" ? "Tweet" : "Update"}`}
                        btnClicked={this.state.mode === "generate" ? this.generateNewTweet : this.updateTweet}
                    />
                </div>
                <ul className="displayTweets">
                {
                    this.state.tweetArr.map((el, idx) => 
                        <DisplayTweets
                            key={el.id}
                            tweet={el}
                            deleteTweet={this.deleteTweet}
                            editTweet={this.editTweet}
                            idx={idx}
                        />
                    )
                }
                </ul>
            </div>
        );
    }
}


export default ShowTweets;
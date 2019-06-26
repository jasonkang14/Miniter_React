import React from 'react';
import './enterNewTweet.css';
import {Textarea, Button} from '../../../form/input';
import DisplayTweets from '../displaytweets/displayTweets';
import * as OldTweets from '../../../../data/getAllTimeline';
import UserName from '../../leftside/whitebox/username/userName'

class EnterNewTweet extends React.Component {

    constructor () {
        super();
        this.state = {
            value: "",
            buttonClicked: false,
            user: "",
            date: "",
            content: "",
            tweetArr: []
        }
    }

    componentDidMount() {
        //첫 화면에 보일 데이터를 페치..fetch
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

    handleInputChange = (e) => {
        this.setState ({
            value: e.value
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

    render() {
        return (
            <div className="EnterNewTweet">
                <Textarea 
                    className="NewMessage" 
                    placeholder="What's happening?" 
                    value={this.state.value}
                    handleInput={this.handleInputChange}
                />
                <Button 
                    className="Make-Btn" 
                    name="MakeTweetBtn"
                    innerHTML="Tweet"
                    btnClicked={this.generateNewTweet}
                />
                <DisplayTweets />
                <ul>
                {
                    this.state.tweetArr.map(el => (
                        <li>
                            <span className="User">{el.user}</span>
                            <span className="Date">{el.date}</span>
                            <div className="Content">{el.contents}</div>
                        </li>
                    ))
                }
                </ul>
            </div>
        );
    }
}

export default EnterNewTweet;


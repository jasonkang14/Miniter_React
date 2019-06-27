import React from 'react';
import './enterNewTweet.css';
import Textarea from '../../../Form/Textarea'
import Button from '../../../Form/Button';
import DisplayTweets from '../DisplayTweets/DisplayTweets';
import * as OldTweets from '../../../../data/getAllTimeline';

//import UserName from '../../leftside/whitebox/username/userName'

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
                {
                    
                    this.state.tweetArr.map(el => 
                            <DisplayTweets
                                key={el.contents}
                                tweet={el}
                            />
                   
                    )
                }
                
            </div>
        );
    }
}

export default EnterNewTweet;


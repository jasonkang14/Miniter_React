import React, {Fragment} from 'react';
import UserInfo from './innerboxes/leftside/userInfo'
import ShowTweets from './innerboxes/rightside/showTweets'

const TwoBoxes = () => {
    return (
        <Fragment>
            <UserInfo />
            <ShowTweets />
        </Fragment>
    );
}

export default TwoBoxes;
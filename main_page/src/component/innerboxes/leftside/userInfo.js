import React from 'react';
import BlueBox from './bluebox/blueBox';
import WhiteBox from './whitebox/whiteBox';
import './userInfo.css'

const UserInfo = () => {

    return (
        <div className="UserInfo">
            <BlueBox/>
            <WhiteBox/>
        </div>
    );
}

export default UserInfo;
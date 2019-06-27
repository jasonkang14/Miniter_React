import React from 'react';
import BlueBox from './BlueBox/BlueBox';
import WhiteBox from './WhiteBox/WhiteBox';
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
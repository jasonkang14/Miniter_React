import React from 'react';
import UserName from './username/userName';
import Profile from './profile/profile';
import UserInfoContainer from './userinfo_container/userinfo_container';
import CountContainer from './count_container/count_container';
import './whiteBox.css';

const WhiteBox = () => {
    return (
        <div className="WhiteBox">
            <UserName />
            <Profile />
            <UserInfoContainer />
            <CountContainer />
        </div>
    );
}

export default WhiteBox;
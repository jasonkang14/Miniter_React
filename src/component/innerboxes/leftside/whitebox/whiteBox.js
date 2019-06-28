import React from 'react';
import UserName from './UserName/UserName';
import Profile from './Profile/Profile';
import UserInfoContainer from './UserInfoContainer/UserInfoContainer';
import CountContainer from './CountContainer/CountContainer';
import './whiteBox.css';

const WhiteBox = () => {
    return (
        <div className="whiteBox">
            <UserName />
            <Profile />
            <UserInfoContainer />
            <CountContainer />
        </div>
    );
}

export default WhiteBox;
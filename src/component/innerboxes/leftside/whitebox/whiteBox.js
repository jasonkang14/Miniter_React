import React from 'react';
import UserName from './username/userName';
import Profile from './profile/profile';
import UserInfo_Container from './userinfo_container/userinfo_container';
import Count_Container from './count_container/count_container';
import './whiteBox.css';

const WhiteBox = () => {
    return (
        <div className="WhiteBox">
            <UserName />
            <Profile />
            <UserInfo_Container />
            <Count_Container />
        </div>
    );
}

export default WhiteBox;
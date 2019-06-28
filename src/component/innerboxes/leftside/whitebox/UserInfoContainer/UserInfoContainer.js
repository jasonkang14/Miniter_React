import React from 'react';
import './userInfoContainer.css';

const UserinfoContainer = () => {
    return (
        <div className="userInfo_container">
           <span className="user_info tweets">Tweets</span>
           <span className="user_info following">Following</span>
           <span className="user_info followers">Followers</span>
        </div>
    );
}

export default UserinfoContainer;
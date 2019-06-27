import React from 'react';
import './userInfoContainer.css';

const UserinfoContainer = () => {
    return (
        <div className="Userinfo_Container">
           <span className="User_Info Tweets">Tweets</span>
           <span className="User_Info Following">Following</span>
           <span className="User_Info Followers">Followers</span>
        </div>
    );
}

export default UserinfoContainer;
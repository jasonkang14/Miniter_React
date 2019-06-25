import React from 'react';
import Tweets from './tweets/tweets';
import Following from './following/following';
import Followers from './followers/followers';
import './userinfo_container.css';

const Userinfo_Container = () => {
    return (
        <div className="Userinfo_Container">
           <Tweets />
           <Following />
           <Followers />
        </div>
    );
}

export default Userinfo_Container;
import { Avatar } from '@material-ui/core';
import React from 'react';
import {useStateValue} from '../StateProvider';

const Sidebar = (props)=>{
    const [{user}, dispatch] = useStateValue();
    return(
        <div>
            <div className="sidebar-Header">
            <div className="sidebar-Header-1">
                <div>
                    <Avatar src={user.photoURL} alt=""/>
                </div>
                <div className="sidebar-Header-para">
                    <p><span id="bold">{user.displayName}</span></p>
                    <p id="light-font">{user.displayName}</p>
                </div>
                </div>
                <div>
                    <p id="blue-sidebar">Switch</p>
                </div>
            </div>
            <div className="sidebar-Middle sidebar-header-padding">
                <div className="sidebar-suggestion sidebar-align">
                    <p id="grey-sidebar">Suggestion For You</p>
                    <p style={{fontSize: '12px'}}>See All</p>
                </div>
                
                <div className="sidebar-Header sidebar-header-padding">
            <div className="sidebar-Header-1">
                <div>
                    <Avatar src="https://avatars0.githubusercontent.com/u/5017470?s=120&v=4" alt=""/>
                </div>
                <div className="sidebar-Header-para">
                    <p><span id="bold">Akash_bhatt2</span></p>
                    <p id="light-font">Suggested for you</p>
                </div>
                </div>
                <div>
                    <p id="blue-sidebar">Follow</p>
                </div>
            </div>

            <div className="sidebar-Header sidebar-header-padding">
            <div className="sidebar-Header-1">
                <div>
                    <Avatar src="https://avatars3.githubusercontent.com/u/27127?s=120&v=4" alt=""/>
                </div>
                <div className="sidebar-Header-para">
                    <p><span id="bold">Mohitf</span></p>
                    <p id="light-font">New to Instagram</p>
                </div>
                </div>
                <div>
                    <p id="blue-sidebar">Follow</p>
                </div>
            </div>

            <div className="sidebar-Header sidebar-header-padding">
            <div className="sidebar-Header-1">
                <div>
                    <Avatar src="https://avatars2.githubusercontent.com/u/806363?s=120&v=4" alt=""/>
                </div>
                <div className="sidebar-Header-para">
                    <p><span id="bold">Abhishek</span></p>
                    <p id="light-font">Followed by Akash_bhatt2 + 8 others</p>
                </div>
                </div>
                <div>
                    <p id="blue-sidebar">Follow</p>
                </div>
            </div>

            <div className="sidebar-Header sidebar-header-padding">
            <div className="sidebar-Header-1">
                <div>
                    <Avatar src="https://avatars0.githubusercontent.com/u/788144?s=120&v=4" alt=""/>
                </div>
                <div className="sidebar-Header-para">
                    <p><span id="bold">Rohiit</span></p>
                    <p id="light-font">Suggested for you</p>
                </div>
                </div>
                <div>
                    <p id="blue-sidebar">Follow</p>
                </div>
            </div>

            <div className="sidebar-Header sidebar-header-padding">
            <div className="sidebar-Header-1">
                <div>
                    <Avatar src="https://avatars2.githubusercontent.com/u/73818?s=100&v=4" alt=""/>
                </div>
                <div className="sidebar-Header-para">
                    <p><span id="bold">vibhor23</span></p>
                    <p id="light-font">New to Instagram</p>
                </div>
                </div>
                <div>
                    <p id="blue-sidebar">Follow</p>
                </div>
            </div>

            </div>
            <div className="sidebar-bottom-1">
                <ul>
                    <li>About</li>
                    <li>Help</li>
                    <li>Press</li>
                    <li>API</li>
                    <li>Jobs</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Locations</li>
                </ul>
                <ul>
                    <li>Top Accounts</li>
                    <li>Hashtags</li>
                    <li>Language</li>
                </ul>
            </div>
            <div className="sidebar-bottom-2 sidebar-bottom-1">
                <p>© 2021 Instagram from Facebook</p>
            </div>
        </div>
    );
}


export default Sidebar;
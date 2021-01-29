import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import InboxSharpIcon from '@material-ui/icons/InboxSharp';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {useStateValue} from '../StateProvider';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    }
  }));


const Header = () =>{
    const [{user}, dispatch] = useStateValue();
    const classes = useStyles();
    return(
        <div className="header-top">
        <div className="header">
            <div className="header-insta-container">
            <div className="header-insta-logo">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
            </div>
            </div>
            <div className="header-input-container">
            <input type="text" placeholder="Search" className="header-input"/>
            </div>
            <div className="header-icons">
                <div className="header-icon-list">
                <div className="header-icon"><HomeIcon style={{ fontSize: 28 }}/></div>
                <div className="header-icon"><InboxSharpIcon style={{ fontSize: 28 }}/></div>
                <div className="header-icon"><ExploreOutlinedIcon style={{ fontSize: 28 }}/></div>
                <div className="header-icon"><FavoriteBorderOutlinedIcon style={{ fontSize: 28 }}/></div>
                <div className="header-icon"><Avatar src={user.photoURL || "https://avatars.githubusercontent.com/u/26677033?s=120&v=4"} className={classes.small}/></div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Header;
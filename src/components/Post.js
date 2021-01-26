import React from 'react';
import {Avatar} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { makeStyles } from '@material-ui/core/styles';

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


const Post = (props)=>{
    const classes = useStyles();
    return(
        <div className="postContainer">
            <div className="postContainerHeader">
               <Avatar src={props.avatarSrc}/> 
                <p id="bold">{props.userName}</p>
            </div>
            <div className="postContainerMiddle">
                <img src={props.imageSrc} alt=""/>
            </div>
            <div className="postContainerBottom">
                <div className="postContainerBottom-action">
                    <div className="action-list">
                    <div id="padding-7px"><FavoriteBorderIcon/></div>
                    <div id="padding-7px"><ChatBubbleOutlineIcon/></div>
                    <div id="padding-7px"><SendOutlinedIcon/></div>
                    </div>
                    <div className="action-save">
                        <BookmarkBorderIcon/>
                    </div>
                </div>
                <div className="like-para">
                    <Avatar src="https://avatars2.githubusercontent.com/u/2840504?s=460&u=48a0f5a7dc6c6be0ed9b3a3db45699b0aa6d6bed&v=4" alt="" className={classes.small}/>
                    <p>Liked by <span id="bold">saurabhkanswal</span> and <span id="bold">56 others</span></p>
                </div>
                <div class="status">
                    <p><span id="bold">{props.userName}</span><span id="padding-5px-left">{props.status}</span></p>
                    <p id="light-font">8 hours ago</p>
                </div>
            </div>
        </div>
    )
}
export default Post;
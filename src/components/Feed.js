import React from 'react'
import Post from './Post'


const Feed = ()=>{
    return(
        <div className="feed-container">
            <div className="story-container">
                
            </div>
            <div className="post-container">
                <Post
                avatarSrc="https://avatars1.githubusercontent.com/u/5517129?s=460&u=8491d37a1f6183d96a3e2c3e0c6115678f86122a&v=4"
                userName="Rohit234"
                imageSrc="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
                status="The best part of my life will be these small, nameless moments...❤️"
                />

                <Post
                avatarSrc="https://avatars1.githubusercontent.com/u/6594713?s=460&u=83acd7b7befd1dc59208ea0e81e0474f6f22779b&v=4"
                userName="Alas21"
                imageSrc="https://images.unsplash.com/photo-1610631502526-0326a19ba103?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                status="Turning back till one of us reaches home 😂💀"
                />

                <Post
                avatarSrc="https://avatars3.githubusercontent.com/u/2840504?s=120&v=4"
                userName="saurabhkanswal"
                imageSrc="https://images.unsplash.com/photo-1610631210464-d3df3b970de4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"
                status="Trust the Timing of your life😎"
                />
            </div>
        </div>
    );
}

export default Feed;
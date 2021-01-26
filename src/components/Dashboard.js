import React from 'react'
import Header from './Header'
import Feed from './Feed'
import Sidebar from './Sidebar'
import Story from './Story'
const Dashboard = () =>{
    return(
        <div>
            <Header/>
            <section className="feed-section">
                <div className="feed-section-left">
                    <Story/>
                    <Feed/>
                </div>
                <div className="feed-section-right">
                    <Sidebar
                    userImg="https://avatars2.githubusercontent.com/u/26677033?s=460&u=2d3f7a89f93f10ea7ad1b95f51fc886e23e8c996&v=4"
                    userName="Saurabhkanswal"
                    name="Saurabh kanswal"
                    />
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
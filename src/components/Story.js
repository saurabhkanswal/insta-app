import React from 'react'
import {useStateValue} from '../StateProvider'

const Story = () =>{
    const [{user}, dispatch] = useStateValue();
    return(
        <div className="horizontal-scroll-wrapper squares">
            <div>
                <img src={user.photoURL || "https://avatars.githubusercontent.com/u/26677033?s=120&v=4"} alt="" className="avatar"/>
            </div>
            <div>
                <img src="https://avatars.githubusercontent.com/u/8406456?s=120&v=4" alt="" className="avatar"/>
            </div>
            <div>
                <img src="https://avatars.githubusercontent.com/u/1000217?s=120&v=4" alt="" className="avatar"/>
            </div>
            <div>
                <img src="https://avatars.githubusercontent.com/u/499550?s=120&v=4" alt="" className="avatar"/>
            </div>
            <div>
                <img src="https://avatars.githubusercontent.com/u/1159854?s=120&v=4" alt="" className="avatar"/>
            </div>
            <div>
                <img src="https://avatars.githubusercontent.com/u/4474660?s=100&v=4" alt="" className="avatar"/>
            </div>
            <div>
                <img src="https://avatars.githubusercontent.com/u/1998991?s=120&v=4" alt="" className="avatar"/>
            </div>
            <div>
                <img src="https://avatars.githubusercontent.com/u/71256?s=120&v=4" alt="" className="avatar"/>
            </div>
            
        </div>
    );
}

export default Story;
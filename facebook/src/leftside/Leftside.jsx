import { useState } from 'react'
import './Leftside.css'
import activityImg from "./public/activity.png";
import homeImg from "./public/home-2.png";
import saveImg from "./public/save-2.png";
import messageImg from "./public/message-text.png";
import userImg from "./public/user-square.png";

function Leftside () {
    const [select, setSelect] = useState(0)
    function change(event) {
        setSelect(event.target.value)
    }
    const list = [
        {
            name: "Home",
            img: homeImg
        }, {
            name: "Messages",
            img: messageImg
        }, {
            name: "Profile",
            img: userImg
        }, {
            name: "Saved post",
            img: saveImg
        }, {
            name: "Marketplace",
            img: activityImg
        },
    ];
    return (
        <>
            <div className="leftside-container">
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="20" viewBox="0 0 34 20" fill="none">
                        <ellipse cx="9.91667" cy="10" rx="9.91667" ry="10" fill="#4361EE" />
                        <ellipse cx="28.3333" cy="10" rx="5.66667" ry="5.71429" fill="#899DFC" />
                    </svg>
                    My Social
                    <ul>
                        {list.map((item, index) => (
                            <li onClick={change} value={index} className={index == select ? "selected-page" : ""} key={index}>
                                <img src={item.img} alt={item.name} />
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="download">
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="20" viewBox="0 0 34 20" fill="none">
                        <ellipse cx="9.91667" cy="10" rx="9.91667" ry="10" fill="#4361EE" />
                        <ellipse cx="28.3333" cy="10" rx="5.66667" ry="5.71429" fill="#899DFC" />
                    </svg>
                    <p>
                        Stay updated with the Socially mobile app
                    </p>
                    <a href="#">
                        Download Now
                    </a>

                </div>

            </div>
        </>
    );
} 
export default Leftside
import React from "react";
import ProfilePicture from "../Images/ProfilePicture.jpg"


function Profile() {
    return (
        <div className="profile">
            <img src={ProfilePicture} alt="profile picture" id="profile__img"/>
            <h4>Chimwemwe Masona</h4>
            <p>slack username: Chimwemwe Masona</p>
        </div>
    )
}

export default Profile
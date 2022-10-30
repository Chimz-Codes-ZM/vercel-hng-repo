import React from "react";
import Slack from "../Images/slackLogo.png";
import GitHub from "../Images/githubLogo.png";

function Social() {
  return (
    <div className="soc_images">
      <div className="children">
        <img src={Slack} alt="slack logo" id="slack" />
        <img src={GitHub} alt="github logo" id="github" />
      </div>
    </div>
  );
}

export default Social;

import React, { useState } from "react";

const LikeButton = (props) => {

  const {name} =props
  const [changeText, setChangeText] = useState(true);
  const [likeNum, SetLikeNum] = useState(0);
  const handleChange = () => {
    SetLikeNum (+1)
    return setChangeText(!changeText);
  };

  return (
    <div>
      {changeText ? 
        <button className="LikeButton" onClick={() => handleChange()}>Like {name}</button>
        : 
        <div>
          <p style={{fontSize:"23px", margin:"0 auto"}}>❤️ </p>
        </div>
      }
      <p>likes = {likeNum}</p>
    </div>
  );
}

export default LikeButton;

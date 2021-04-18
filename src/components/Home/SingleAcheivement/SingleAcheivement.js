import React from 'react';

const SingleAchievement = ({achievement}) => {
    const {img,count,achievementName} = achievement
    return (
        <div className="col-md-2 col-sm-4 mt-5 d-flex">
        <div>
            <img src={img} alt=""/>
        </div>
        <div>
            <p style={{fontSize:"20px",fontWeight:"bolder"}}>{count}</p>
            <p style={{color:"red"}}>{achievementName}</p>
        </div>
    </div>
    );
};

export default SingleAchievement;
import React from 'react';

const SingleAchievement = ({achievement}) => {
    const {img,count,achievementName} = achievement
    return (
        <div className="col-md-2 col-sm-4 ml-5 ml-md-0 mt-5 d-flex">
        <div className='mr-3'>
            <img style={{width:"60px"}} src={img} alt=""/>
        </div>
        <div>
            <p style={{fontSize:"20px",fontWeight:"bolder"}}>{count}</p>
            <p style={{color:"blue"}}>{achievementName}</p>
        </div>
    </div>
    );
};

export default SingleAchievement;
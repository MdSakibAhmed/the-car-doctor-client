import React from 'react';
import {useCountUp} from "react-countup";
const SingleAchievement = ({achievement}) => {
    
    const {img,count,achievementName} = achievement
    const {countUp} = useCountUp({
      
        end:count,
        redraw:false
     
      

    })

    return (
        <div  className="col-md-2  col-sm-4 mr-3 ml-5 ml-md-0  d-flex">
        {/* <div className='mr-3'>
            <img style={{width:"60px"}} src={img} alt=""/>
        </div> */}
        <div className="d-flex flex-column align-items-center justify-content-center">
            <p style={{fontSize:"48px",fontWeight:"bolder",color:"white"}}>{ `${countUp}+ `}</p>
            <p style={{color:"white",fontSize:"16px"}}>{achievementName}</p>
        </div>
    </div>
    );
};

export default SingleAchievement;
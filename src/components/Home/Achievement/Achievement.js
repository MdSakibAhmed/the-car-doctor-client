import React from 'react';
import SingleAchievement from '../SingleAcheivement/SingleAcheivement';
import RatingImg from '../../../image/rating.png';
import EsperanceImg from  "../../../image/practice.png";
import TechnitionImg from '../../../image/technical-support.png'
import PreapearImg  from '../../../image/car-repair.png';


const Achievement = () => {
    const achievements = [
        {
            id:1,
            img:RatingImg,
            count:3000,
            achievementName:'Satisfied Customers'
        },
        {
            id:2,
            img:EsperanceImg,
            count:15,
            achievementName:'Years of esperance'
        }, {
            id:3,
            img:TechnitionImg,
            count:500,
            achievementName:'Technician & Workers'
        }, {
            id:4,
            img:PreapearImg,
            count:4000,
            achievementName:'Vehicle Repaired'
        },
    ]
    return (
        <div style={{marginTop:"80px"}} className=" pb-5 ">
        <h1 style={{fontFamily:"'Rajdhani', sans-serif",textAlign:"center"}}>OUR ACHIEVEMENTS</h1>
        <span className="d-block" style={{width:"160px", borderBottom:"3px solid red", margin:"10px auto 30px auto"}}></span>
        <div style={{background:"#E53E29"}} className=' p-3 row  justify-content-center '>

        
       {achievements.map(achievement => <SingleAchievement key={achievement.id} achievement={achievement}></SingleAchievement>)}             
        </div>
        </div>
    );
};

export default Achievement;
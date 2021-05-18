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
        <div className="pt-5 pb-5 container">
        <h1 style={{fontFamily: 'Grenze Gotisch',fontSize:"55px"}} className="text-center "> <span style={{borderBottom:"5px dashed red"}}>Our Achievement</span> </h1>
        <div className='row  justify-content-between'>

        
       {achievements.map(achievement => <SingleAchievement key={achievement.id} achievement={achievement}></SingleAchievement>)}
           
            
        </div>
        </div>
    );
};

export default Achievement;
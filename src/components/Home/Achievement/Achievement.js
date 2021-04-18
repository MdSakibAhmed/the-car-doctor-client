import React from 'react';
import SingleAchievement from '../SingleAcheivement/SingleAcheivement';

const Achievement = () => {
    const achievements = [
        {
            id:1,
            img:'',
            count:3000,
            achievementName:'Satisfied Customers'
        },
        {
            id:2,
            img:'',
            count:15,
            achievementName:'Years of esperance'
        }, {
            id:3,
            img:'',
            count:500,
            achievementName:'Technician & Workers'
        }, {
            id:4,
            img:'',
            count:4000,
            achievementName:'Vehicle Repaired'
        },
    ]
    return (
        <div className="pt-5 pb-5">
        <h1 className="text-center">Our Achievement</h1>
        <div className='row  justify-content-center'>

        
       {achievements.map(achievement => <SingleAchievement key={achievement.id} achievement={achievement}></SingleAchievement>)}
           
            
        </div>
        </div>
    );
};

export default Achievement;
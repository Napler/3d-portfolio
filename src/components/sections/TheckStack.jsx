import React from 'react'
import TitleHeader from '../titleheader'
import { techStackIcons } from '../../constants/index.jsx'
import TechIcon from '../models/TechLogos/TechIcons'
const TheckStack = () => {
  return (
    <div id='skills' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader title='My Preferred Tech Stack' sub='The Skills I bring to the table 🤝' />


             <div className="tech-grid ">
                {techStackIcons.map((icon)=>(
                 <div key={icon.name} className="relative group">
                 {/* Glow Background - positioned outside actual card */}
                 <div className="tech-card-animated-bg absolute inset-0 -z-10" />
               
                 {/* Main Card */}
                 <div className="card-border tech-card overflow-hidden xl:rounded-full rounded-lg relative z-10">
                   <div className="tech-card-content">
                     <div className="tech-icon-wrapper">
                       <TechIcon model={icon} />
                     </div>
                     <div className="padding-x w-full">
                       <p>{icon.name}</p>
                     </div>
                   </div>
                 </div>
               </div>
               
               

                ))}
                

                </div> 




                


        
        

        
        
                </div> 
        
        
        
        </div>
  )
}

export default TheckStack
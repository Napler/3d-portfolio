    import React from 'react'
import { logoIconsList } from '../../constants/index.jsx'

const LogoSection = () => {

    const CompanyLogo = ({ companyName, logoUrl, index }) => {
        return (
            <div className="flex-none flex-center marquee-item flex items-center ">
                <img 
                    src={logoUrl} 
                    alt={`${companyName} logo`} 
                    className={`${index === 3 ? 'w-16 h-16' : 'w-20 h-20'} object-contain`}
                />
                <span className="text-gray-400 text-lg font-medium whitespace-nowrap">
                    {companyName}
                </span>
            </div>
        )
    }
    

  return (
    <div className='hidden lg:block md:my-20 my-10 relative'>
        <div className='gradient-edge'/>
        <div className='gradient-edge'/>


        <div className='marquee h-52'>

            <div className='marquee-box md:gap-16 gap-8'>
                {logoIconsList.map((logo,index)=>(
                    <CompanyLogo key={`first-${index}`} companyName={logo.companyName} logoUrl={logo.imgPath} index={index}/>
                ))}
                {logoIconsList.map((logo,index)=>(
                    <CompanyLogo key={`second-${index}`} companyName={logo.companyName} logoUrl={logo.imgPath} index={index}/>
                ))}
                {logoIconsList.map((logo,index)=>(
                    <CompanyLogo key={`third-${index}`} companyName={logo.companyName} logoUrl={logo.imgPath} index={index}/>
                ))}
                {logoIconsList.map((logo,index)=>(
                    <CompanyLogo key={`fourth-${index}`} companyName={logo.companyName} logoUrl={logo.imgPath} index={index}/>
                ))}
                {logoIconsList.map((logo,index)=>(
                    <CompanyLogo key={`fifth-${index}`} companyName={logo.companyName} logoUrl={logo.imgPath} index={index}/>
                ))}
            </div>
        </div>

    </div>
  )
}

export default LogoSection 
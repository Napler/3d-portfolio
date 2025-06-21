import React, { useEffect,useState } from 'react'
import { navLinks } from '../constants/index'
function NavBar() {
    const [scrolled,setScrolled] = useState(false);
    useEffect(()=>{
        const handleScroll = ()=>{
            setScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener('scroll',handleScroll);
    },[]);
  return (
    <div>
        <header className={`navbar ${scrolled ? 'scrolled':'notscroll' }`}>
            <div className='inner'>
                <a className='logo' href='#hero'>
                    <img src="/images/logo.webp" alt="logo" height={50} width={50} style={{display:'inline-block'}} className='mr-1 mb-1'/>
                    Bechir|DHOUIB
                </a>
                <nav className='desktop'>
                    <ul>
                        {
                            navLinks.map((link,index)=>(
                                <li key={index} className='group'>
                                    <a href={link.link} className='nav-link'>{link.name}
                                    <span className='underline'></span></a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className='inner'>
                        <span>Contact Me</span>
                    </div>


                </a>
            </div>
        </header>


    </div>
  )
}

export default NavBar
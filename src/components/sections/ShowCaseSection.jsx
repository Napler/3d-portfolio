import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function ShowCaseSection() {
    const sectionRef = useRef(null)
    const firstProjectRef = useRef(null)
    const secondProjectRef = useRef(null)
    const thirdProjectRef = useRef(null)
    const projects = [firstProjectRef, secondProjectRef, thirdProjectRef]

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        projects.forEach((projectRef, index) => {
            gsap.fromTo(projectRef.current,
                {
                    y: 200,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    scrollTrigger: {
                        trigger: window.innerWidth >= 1280 ? sectionRef.current : projectRef.current,
                        start: "top 90%",
                        end: "top 10%",
                        scrub: 2,
                        toggleActions: "play none none reverse"
                    }
                }
            )
        })
    }, [])

    return (
        <div id='work' className='app-showcase' ref={sectionRef}>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* Main project */}
                    <div className='first-project-wrapper' ref={firstProjectRef}>
                        <div className='image-wrapper relative group'>
                            <h2 className="absolute bottom-8 left-8 text-xl md:text-2xl lg:text-3xl font-bold text-white-50 z-10 transition-all duration-300 group-hover:scale-110">My first real world project made with love</h2>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 rounded-xl"></div>
                            <img src="/images/project1.png" alt="project1" className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:blur-sm" />
                        </div>
                        <div className="text-content">
                            <p className="text-white-50 mt-4 text-lg">This project was built using pure HTML, CSS, and JavaScript, showcasing the power of vanilla web technologies.</p>
                        </div>
                    </div>

                    {/* Secondary projects container */}
                    <div className='secondary-projects-wrapper'>
                        <div className='project' ref={secondProjectRef}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src='/images/project2.jpg' alt='still uploading' className="w-full h-full object-cover rounded-xl"/>
                            </div>
                            <p className='text-white-50 mt-4 text-lg'>the project will be uploaded soon</p>
                        </div>

                        <div className='project' ref={thirdProjectRef}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src='/images/project2.jpg' alt='still uploading' className="w-full h-full object-cover rounded-xl"/>
                            </div>
                            <p className='text-white-50 mt-4 text-lg'>the project will be uploaded soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowCaseSection
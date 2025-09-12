import React, { useEffect, useState } from 'react'

const About = () => {
    const[progress,setProgress]=useState(0);
    const[progress1,setProgress1]=useState(0);
    const[progress2,setProgress2]=useState(0);
    const[progress3,setProgress3]=useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setProgress(95);
        }, 100);
    }, []);
    useEffect(()=>{
        setTimeout(()=>{
            setProgress1(85);
        }, 100);
    }, []);
    useEffect(()=>{
        setTimeout(()=>{
            setProgress2(90);
        }, 100);
    }, []);
    useEffect(()=>{
        setTimeout(()=>{
            setProgress3(90);
        }, 100);
    }, []);

  return (
    <section id='About' className='py-20 bg-gradient-to-r from-blue-100 to-blue-200 '>
     <div className="container mx-auto text-center">
     <h2 className='text-5xl font-bold text-gray-600'>About Me</h2>
     <p className='max-w-2xl mx-auto mt-6 text-gray-600'>I am a skilled Web Developer with over years of experience in the
                            industry.My
                            passion lies in creating captivating them throughout frontend development.I am uptodate with
                            current
                            trending designs and leveraging my creativity to produce visually appealing and
                            user-friendly
                            websites.Throutout my career,I have developed a deep understanding of UX and UI principles.
                            <br/><br/>
                            I
                            strongly
                            believe that a well-designed website should not only look visually appealing but also
                            provide a
                            smooth
                            and enjoyable interaction for visitor and should be responsible website for every
                            gadgets.When
                            starting
                            a new project I thoroughly research and analyze the target audience and the client's
                            specific
                            requirements.This enables me to tailor my designs to meet their expectations amd deliver a
                            unique
                            online
                            presence that aligns with their brand identity.
                        </p>
     </div>

     <div className='flex flex-col gap-2 justify-center items-center mt-8'>
      <div className='relative w-[500px] h-10 rounded-full bg-cyan-500 overflow-hidden'>
        <div className="absolute top-1 left-0 h-8 rounded-full bg-cyan-300 flex items-center justify-center font-semibold transition-all duration-1000 ease-in-out" style={{width: `${progress}%`}} ><p>HTML/CSS <span>{progress}%</span></p></div>
      </div>
      <div className='relative w-[500px] h-10 rounded-full bg-cyan-500 overflow-hidden'>
        <div className="absolute top-1 left-0 h-8 rounded-full bg-cyan-300 flex items-center justify-center font-semibold transition-all duration-1000 ease-in-out" style={{width: `${progress1}%`}} ><p>BOOTSTRAP/TAILWIND <span>{progress1}%</span></p></div>
      </div>
      <div className='relative w-[500px] h-10 rounded-full bg-cyan-500 overflow-hidden'>
        <div className="absolute top-1 left-0 h-8 rounded-full bg-cyan-300 flex items-center justify-center font-semibold transition-all duration-1000 ease-in-out" style={{width: `${progress2}%`}} ><p>JAVASCRIPT <span>{progress2}%</span></p></div>
      </div>
      <div className='relative w-[500px] h-10 rounded-full bg-cyan-500 overflow-hidden'>
        <div className="absolute top-1 left-0 h-8 rounded-full bg-cyan-300 flex items-center justify-center font-semibold transition-all duration-1000 ease-in-out" style={{width: `${progress3}%`}} ><p>REACT JS <span>{progress3}%</span></p></div>
      </div>
     </div>
    </section>
  )
}

export default About
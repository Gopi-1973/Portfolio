import React from 'react'
import img from '../assets/img2.jpeg'




  const projects =[
      {
        id:1,
        title:"Real Estate Website",
        image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
      },
      {
        id:2,
        title:"Resturant Website",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSceJrqeh5Y53DD_mB1LWPshiWdaLWxprIitQ&s"
      },
      {
        id:3,
        title:"Hospital Website",
        image:"https://asianheartinstitute.org/wp-content/uploads/2023/12/home-banner-mob.webp"
      },
      {
        id:4,
        title:"E-commerce Website",
        image:"https://thumbs.dreamstime.com/b/e-commerce-online-shopping-business-technology-concept-screen-e-commerce-online-shopping-business-technology-concept-screen-207950081.jpg"
      },
    ]
    
const Projects = () => {
  return (

  <section id='Projects' className=' py-20 bg-gradient-to-r from-blue-50 to-blue-200'>
    <div className="container mx-auto text-center">
      <h2 className='text-5xl font-bold text-gray-600 underline un'>Projects</h2>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
       {projects.map((p)=>(
        <div key={p.id} className='bg-white shadow-lg rounded-lg overflow-hidden'>
         <img src={p.image} alt={p.title} className='w-full h-56 object-cover'/>
         <div className='p-4'>
          <h3 className='text-2xl font-semibold'>{p.title}</h3>
         </div>
        </div>
       ))}
      </div>
    </div>
        
    </section>
  )
}

export default Projects
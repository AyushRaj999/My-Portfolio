import React from 'react'
import chat from '../assets/chatAppLogo2.png'
import shoes from '../assets/shoes.jpg'
import book from '../assets/book3.jpeg'
import amazon from '../assets/amazon.png'
import name from '../assets/port.webp'
import Card from './Card'

function Project() {
  const projectJson=[
    {
      title:"Chat App",
      image:chat,
      description:"A simple chat app built with MERN stack that perform real-time communication between users.",
      live:"",
      github:""
    },
    {
      title:"Shoes",
      image:shoes,
      description:"A shoes website built with React, that allows users to view and purchase shoes.",
      live:"",
      github:""
    },
    {
      title:"Book Store",
      image:book,
      description:"A simple book store website built with MERN, that allows users to view and purchase books.",
      live:"",
      github:""
    },
    {
      title:"Amazon",
      image:amazon,
      description:"frontend clone of amazon website built with HTML & CSS that allows users to view and purchase products.",
      live:"",
      github:""
    },
    {
      title:"Personal Portfolio",
      image:name,
      description:"personal portfolio website built with React that allows users to view my projects and contact me.",
      live:"",
      github:""
    }
  ]
  return (
    <section id='projects' className='relative bg-gray-500 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
         <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Project</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
          {projectJson.map((items) => {
            return <Card item={items}/>
          })}
         </div>
      </div>
    </section>
  )
}

export default Project

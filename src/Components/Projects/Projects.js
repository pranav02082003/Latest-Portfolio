import React from 'react'
import Hospital from '../../Assets/avatar.svg'
import '../../Components/Projects/Projects.css'
import ProjectCard from './ProjectCard'

export default function Projects() {
    return (
        <div>
            <div className='about-mainheading'>
                <h1>MY <span className='yellow'>PROJECTS</span></h1>
            </div>
            <div className='project-maindiv'>
                <ProjectCard imgPath={Hospital} heading='Hospital Management' description='Developed an innovative "Hospital Management System " as a
web application using MERN stack. Proficiently implemented
CRUD operations, establishing a dynamic platform for
seamless experiences through auctions.' ghlink='https://github.com/pranav02082003/Hospital-front-end' viewlink='https://hospital-management-h3r1.onrender.com/'/>
            </div>
        </div>
    )
}

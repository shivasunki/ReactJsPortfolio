import React from 'react'
import ProjectItem from './ProjectItem'
import AIImg from "../assets/AI.jpg"
import PMImg from "../assets/project_time_management.jpg"
import mobileappImg from "../assets/mobile_app.jpg"
import webappImg from "../assets/webapp.jpg"

const Projects = () => {
  return (
    <div id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum aperiam, in, eius quibusdam similique accusantium nostrum et deleniti placeat eveniet necessitatibus? Velit officiis voluptas fugiat accusantium eos sunt, quod magni.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={AIImg} title="Intelligent Document Processing App" />
            <ProjectItem img={PMImg} title="Project/Time Management (Web)" />
            <ProjectItem img={webappImg} title="Patient Enrollment App" />
            <ProjectItem img={mobileappImg} title="Project/Time Management (Mobile)" />
        </div>
    </div>
  );
}

export default Projects
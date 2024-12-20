"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { projectData } from '@/lib/data'
import Project from './project-card'


const Projects = () => {
   
  return (
        <section
        id='projects'
        className="scroll-mt-28 mb-28">
            <SectionHeading>
                My Projects
            </SectionHeading>

            <div>
                {
                    projectData.map((project, index) => (
                        <Project {...project} key={index} />
                    ))
                }
            </div>
        </section>
  )
}

export default Projects
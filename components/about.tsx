"use client"

import React from 'react'
import SectionHeading from './section-heading'
import Image from 'next/image'
import { useSectionInView } from '@/lib/useInView'

// animation
import { motion } from 'framer-motion'
import { Fade } from 'react-awesome-reveal'


const About = () => {
  const { ref } = useSectionInView("#about")


  return (
   <motion.section
     initial={{ opacity: 0, y: 100}}
     animate={{opacity: 1, y: 0}}
     transition={{ delay: 0.175 }}
     id='about'
     ref={ref}
     className='max-w-[45rem] text-center mt-32 leading-8 mb-28 sm:mb-40 scroll-mt-28'
     >
    
      <div className='container mx-auto'>
        <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
          <SectionHeading>
            Who Am I?
          </SectionHeading>
        </Fade>
       

        <div className='grid xl:grid-cols-2 lg:text-start justify-around'>
          <div className='flex-1'>
            <div className='text-lg mt-12 xl:mt-3'>
              <div className='flex justify-start flex-col'>

                <Fade direction='up' delay={300} cascade damping={1e-1} triggerOnce={true}>
                  <h3 className='font-bold mt-6'>What I do...</h3>  
                </Fade>
                
                <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                  <p className='mt-2 leading-relaxed text-sm test-gray-700
                  dark:text-white/70'>
                    I am a passionate software developer dedicated to crafting seamless,
                    user-friendly digital experiences. Specializing in front-end and full-stack development,
                    I leverages technologies like <span className='text-blue-700'>Next.js</span>, <span className='text-blue-700'> React </span>, <span className='text-blue-700'>Tailwind CSS</span>, and <span className='text-blue-700'>JavaScript</span> to bring ideas to life.
                    With expertise in <span className='text-blue-700' >MySQL</span> and <span className='text-blue-700'>Node.js solutions</span>, I ensure robust and efficient systems.
                  </p>
                </Fade>
                
                <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
                  <h3 className='font-bold mt-6'>In My Free Time...</h3>
                </Fade>

                <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
                  <p className='mt-2 leading-relaxed text-sm test-gray-700
                  dark:text-white/70'>
                    When I'm not coding, I explore creative projects, experimenting with new technologies,
                    and cultivating my passion for <span className='text-blue-700'>machine learning</span> and <span className='text-blue-700'>software development simulations</span> . Let’s collaborate 
                    to create something extraordinary!
                  </p>
                </Fade>
              </div>
            </div>
          </div>

          {/* Right Image*/}
          <div className='flex justify-center'>
            <Fade direction='right' delay={1000} cascade damping={1e-1} triggerOnce={true}>
              <Image
              src="/rodgers.png"
              alt="About Me"
              width="200"
              height="100"
              quality="100"
              priority
              className='rounded-full mt-8 lg:ml-5 object-cover'
              />
            </Fade>
          </div>
          
        </div>
      </div>
   </motion.section>
  )
}

export default About
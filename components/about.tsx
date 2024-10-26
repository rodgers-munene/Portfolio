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
            About Me
          </SectionHeading>
        </Fade>
       

        <div className='grid xl:grid-cols-2 lg:text-start'>
          <div className='flex-1'>
            <div className='text-lg mt-12 xl:mt-3'>
              <div className='flex justify-start flex-col'>

                <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
                  <h3 className='font-bold mt-6'>Mission</h3>  
                </Fade>
                
                <Fade direction='up' delay={600} cascade damping={1e-1} triggerOnce={true}>
                  <p className='mt-2 leading-relaxed text-sm test-gray-700
                  dark:text-white/70'>
                    I believe that a website is the foundation of a successful online presence, and
                    my goal is to help businesses establish a strong digital presence. It all 
                    begins with understanding your business goals
                  </p>
                </Fade>
                
                <Fade direction='up' delay={800} cascade damping={1e-1} triggerOnce={true}>
                  <h3 className='font-bold mt-6'>Vision</h3>
                </Fade>

                <Fade direction='up' delay={1000} cascade damping={1e-1} triggerOnce={true}>
                  <p className='mt-2 leading-relaxed text-sm test-gray-700
                  dark:text-white/70'>
                    I the use this information to create a custom website that not only reflects your
                    brand but also helps you achieve you business objective. From responsive design
                    to intuitive navigation. I focus on every detail.
                  </p>
                </Fade>
              </div>
            </div>
          </div>

          {/* Right Image*/}
          <div>
            <Fade direction='right' delay={1000} cascade damping={1e-1} triggerOnce={true}>
              <Image
              src="/about.png"
              alt="About Me"
              width="600"
              height="100"
              quality="100"
              priority
              className='rounded-full mt-8 object-cover'
              />
            </Fade>
          </div>
          
        </div>
      </div>
   </motion.section>
  )
}

export default About
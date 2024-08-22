import { motion } from 'framer-motion'
import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { SideLeft, SideRight, SideUp } from './animation'

function Hero() {
  return (
    <>
      <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
          <div className='flex flex-col justify-center py-14 md:py-0 font-playfair '>
            <div className='text-center md:text-left space-y-6'>
            <motion.h1
            variants={SideRight(0.6)}
            initial="hidden"
            animate="visible"
            className='text-5xl lg:text-6xl font-bold leading-relaxed xl:landing-normal'>Gym  Gives you the prefect <span className='text-primary'>Health</span></motion.h1>
            <motion.p
                        variants={SideRight(1.2)}
                        initial="hidden"
                        animate="visible"
            
            className='text-gray-600 xl:max-w-[500px]'>it is a long established fact that a reader will be by readable content of a page when are the best product.</motion.p>
    {/* button section */}
    <motion.div
                          variants={SideRight(1.5)}
                          initial="hidden"
                          animate="visible"
    
    className='flex justify-center items-center gap-8 md:justify-start !mt-4'>
    <button className='primary-btn flex items-center gap-2 mt-4'>Order Now</button>
    <button className='flex justify-center items-center gap-2 '><FaPlay/> Watch Now</button>

    </motion.div>
            </div>
          </div>
          <div
          
           className='flex justify-center items-center'>
            <motion.img  
                                  variants={SideUp(0.6)}
                                  initial="hidden"
                                  animate="visible"
        
                                  // initial={{opacity:0, x:-100}}
            
            src="https://diyactive.com/wp-content/uploads/2019/03/The-Ultimate-Guide-To-Building-A-Home-Gym-Starting-Today.jpg" alt="" className='w-[100px] md:w-[530px] xl:w-[400px] rop-shadow  rounded' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero

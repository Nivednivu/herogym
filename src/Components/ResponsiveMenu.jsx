import {motion, AnimatePresence } from 'framer-motion'
import React from 'react'

function ResponsiveMenu({open}) {
  return (
    <div>
      <AnimatePresence>
        {
            open && (
                <motion.div
                initial={{opacity:0,y:-100}}
                animate={{opacity:1,y:0}}
                exit={{opacity:0, y:-100}}
                className='absolute top-20 left-0 w-full h-screen z-20'
                >
                    <div className='text-xl font-semibold uppercase bg-primary text-white py-10 m-6 rounded'>
                        <ul className='flex flex-col justify-center items-center gap-10'>
                            <li>home</li>
                            <li>About</li>
                            <li>service</li>
                            <li>contact</li>
                        </ul>
                    </div>
                </motion.div>
                 
            
            )
        }
      </AnimatePresence>
    </div>
  )
}

export default ResponsiveMenu

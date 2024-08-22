import React from 'react'
import { FaDumbbell } from 'react-icons/fa'
import { GiGymBag } from 'react-icons/gi'
import { GrYoga } from 'react-icons/gr'
import { SideLeft } from './animation'
import { motion } from 'framer-motion'

const EquipentsData = [
    {
    id:1,
    title:"yoga Equipments",
    desc:"it is a long established fact that a reader readable . It  a long established fact that a reader readable",
     icons: <GrYoga/>,
     delay:0.3},
    
    { id:2,
    title:"Muscles equipments",
    desc:"it is a long established fact that a reader readable . It  a long established fact that a reader readable",
    link:"/",
     icons: <FaDumbbell/>,
     delay:0.6,},
    {id:3,
    title:"Fitness Equipments",
    desc:"it is a long established fact that a reader readable . It  a long established fact that a reader readable",
     icons: <GiGymBag/>,
     delay:0.9,

}]

function Equipments() {
  return (
    <div>
        <div className="container py-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
                <div className='space-y-4 p-6'>
                    <h1 className='text-xl md:text-2xl font-bold'>What we offer for you</h1>
                    <p className='text-gray-500'>It is a long established fact that a render readable</p>
                </div>
                {
                    EquipentsData.map((item)=>(
                        <motion.div
                        variants={SideLeft(item.delay)}
                        initial="hidden"
                        whileInView="visible"
                        key={item.id}
                        className='space-y-4 p-6 bg-gray-200 hover:bg-white rounded-xl hover:shadow-[]'>
                            <div>{item.icons}</div>
                            <p className='text-2xl font-semibold'>{item.title}</p>
                            <p className='text-gray-500'>{item.desc}</p>

                        </motion.div>
                    ))
                }
            </div>
            
        </div>
    </div>
  )
}

export default Equipments

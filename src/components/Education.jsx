import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcons from './LiIcons'

const Details = ({ type, time, place, }) => {

    const ref = useRef()

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col text-left justify-between'>
        <LiIcons reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
        >
            <h3 className=' capitalize font-bold text-2xl'>
                {type}
            </h3>
            <span className=' capitalize font-medium text-dark/75'>
                {time} | {place}
            </span>

        </motion.div>
    </li>
}

const Education = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        ref: ref, // Use the ref of the container
        initial: 0, // Set the initial scroll position
        threshold: 0.5, // Adjust the threshold to trigger the animation
    });


    return (


        <div className=" mt-[9rem] my-64 text-center">
            <h2 className='font-bold text-5xl mb-32'>Education</h2>

            <div
                ref={ref}
                className="w-[75%] mx-auto relative">

                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-8 top-0 w-[4px] h-full bg-[#2c3e50] origin-top ' />
                <ul className="w-[70vw] flex flex-col items-start justify-between">
                    <Details
                        type="Bachelor Of Technology,CSE"
                        place="Kalinga Institute Of Industrial Technology"
                        time="2021 - 2025"
                    />
                    <Details
                        type="Higher Secondary"
                        place="D.C. Memorial Senior Secondary School Indore"
                        
                    />
                    <Details
                        type="High School"
                        place="Gyanasthali Vidyalaya Senior Secondary School"
                    
                    />


                </ul>
            </div>
        </div>
    )
}

export default Education

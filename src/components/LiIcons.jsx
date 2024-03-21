'use client'
import React from 'react'
import {motion,useScroll} from 'framer-motion'
import  { useThemeContext } from '@/app/context/theme';
const LiIcons = ({reference}) => {

    const { theme } = useThemeContext();


    const {scrollYProgress} = useScroll(
        {
            target:reference,
            offset:["center end","center center"]
        }
    )

    return (
        <figure className={`absolute -left-5 ${theme ? 'stroke-[#2c3e50]':'stroke-white'}
         sm:hidden
         md:hidden`}>
            <svg width="75" height="75" viewBox='0 0 100 100'>
                <circle className='stroke-pink-400 stroke-1 fill-none' cx="75" cy="50" r="20" />
                <motion.circle
                 style={{
                    pathLength:scrollYProgress
                 }}
                className= {` ${theme ? 'fill-white':'fill-[#2c3e50]'} stroke-[5px]`} cx="75" cy="50" r="20" />
                <circle className='stroke-1 fill-pink-400' cx="75" cy="50" r="10" />
            </svg>
        </figure>
    )
}

export default LiIcons

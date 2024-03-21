'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const Logo = () => {
    const MotionLink = motion(Link)
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink
                className='w-16 h-16 bg-[#2c3e50] text-lime-100 flex items-center justify-center rounded-full text-2xl font-bold'
                href="/"
                whileHover={{
                    backgroundColor: ["#121212","rgba(131,58,180,1)","rgba(251,23,21,2)","rgba(131,58,180,2)","#121212"],
                    transition: { duration: 1, repeat: Infinity },
                }}
                >AD</MotionLink>
        </div>
    )
}

export default Logo
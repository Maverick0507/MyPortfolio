'use client'
import React from 'react'
import { motion } from 'framer-motion'

const quote = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren:0.08
        }
    }
}

const singleWord = {
    initial: {
        opacity: 1,
        y:50
    },
    animate: {
        opacity: 1,
        y:0,
        transition: {
            duration:1
        }
    }
}

const AnimatedText = ({ text, className = "" }) => {

    

    return (
        <div className='w-full mx-auto py-2 flex items-center justify-normal text-left overflow-hidden'>
            <motion.h1
                variants={quote}
                initial="initial"
                animate="animate"
                className={` inline-block w-full text-[#2c3e50] font-bold capitalize   ${className}`}>
                {text.split(" ").map((word, index) =>
                (
                    <motion.span key={word + '-' + index}
                        className=' inline-block '
                        variants={singleWord}
                    >
                        {word}&nbsp;
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    )
}

export default AnimatedText

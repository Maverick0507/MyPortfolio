'use client'
import AnimatedText from '@/components/AnimatedText'
import Head from 'next/head'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import arrow from '../../../public/icons/down_arrow.gif'
import SKills from '@/components/SKills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import { useThemeContext } from '../context/theme'

const Page = () => {
    const text = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                delay: 0.5,
            }
        }
    }

    const skillsRef = useRef()
    const scrollToSkills = () => {
        if (skillsRef.current) {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const { theme } = useThemeContext()


    return (
        <>
            <Head>
                <title>Ayush | About</title>
                <meta name="description" content="--" />
            </Head>

            <main className={`  h-full w-full flex flex-col items-center justify-center p-5 pt-[15vh] mt-[5rem] ${!theme ? 'bg-[#2c3e50] text-white' : ''}
             sm:pt-5 
             md:pt-[6rem]
             
            `}>
                <AnimatedText
                    className={`
                        text-5xl text-center 
                        sm:!text-xl
                        md:!text-6xl
                        lg:text-8xl
    ${!theme ? 'text-[#f7f1e3]' : ''}
  `}
                    text="Let Me Tell You More About Me"
                />


                <motion.p
                    variants={text}
                    initial="initial"
                    animate="animate"
                    className='text-xl text-center font-normal mt-3 p-4 
                    sm:text-left sm:pb-0 sm:!text-[1.2rem]
                    md:text-[1.4rem] md:pt-9
                    lg:text-[1.5rem] lg:pt-12
                    ' >

                    Hello! I'm Ayush Dwivedi, a passionate web developer with a knack for turning ideas into interactive and efficient web applications. My journey in the world of web development has equipped me with a diverse skill set that spans both front-end and back-end technologies. I take pride in creating seamless digital experiences that not only look great but also function flawlessly.
                </motion.p>

                <motion.p
                    variants={text}
                    initial="initial"
                    animate="animate"
                    className='text-xl text-center font-normal mt-3 p-4 
                    sm:text-left sm:pb-0 sm:!text-[1.2rem]
                    md:text-[1.4rem] md:pt-9
                    lg:text-[1.5rem] lg:pt-12
                    ' >
                    I have a strong affinity for problem-solving, and I enjoy tackling algorithmic challenges on platforms like LeetCode and GeeksforGeeks. Whether it's optimizing code or finding elegant solutions to complex problems, I'm always up for the challenge.

                </motion.p>



                <Image src={arrow}
                    onClick={scrollToSkills}
                    className={`h-[3rem] w-[3rem] mt-[5rem] hover:cursor-pointer ${!theme ? 'bg-white rounded-full' : ''}
                    sm:hidden
                    md:h-[5rem] md:w-[5rem] md:hidden 
                    lg:h-[6.5rem] lg:w-[6.5rem] lg:hidden

                    `}
                />

                {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                <SKills skillsRef={skillsRef} />

                {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                
                <Education/>

                <Experience />

                {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}


                {/* <Education/> */}

            </main>
        </>
    )
}

export default Page;

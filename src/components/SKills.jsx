import React, { useRef } from 'react';
import AnimatedText from './AnimatedText';
import Image from 'next/image';
import js from '../../public/icons/js.png';
import react from '../../public/icons/react.png';
import next from '../../public/icons/next.png';
import mongo from '../../public/icons/mongo.png';
import firebase from '../../public/icons/firebase.png';
import sql from '../../public/icons/sql.png';
import bootstrap from '../../public/icons/bootstrap.png';
import tailwind from '../../public/icons/tailwind.png';
import node from '../../public/icons/node.png';
import express from '../../public/icons/express.png';
import c from '../../public/icons/c++.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useThemeContext } from '@/app/context/theme';

const Skills = ({skillsRef}) => {

    const {theme} = useThemeContext()

    const skills = `
        h-[4rem] 
        w-[4rem]  
        bg-gray-300 
        px-3
        py-3
        text-white 
        rounded-tl-3xl 
        rounded-tr-3xl
        rounded-bl-3xl
        rounded-br-3xl
        cursor-pointer
    `;



    return (
        <div className='w-full h-[100vh] pt-[13vh]
       
        '
        
        ref={skillsRef}>
            <AnimatedText
                className={`!text-5xl text-center ${!theme ? 'text-[#f7f1e3]':''}`}
                text="Skills"
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        delay: 0.5,
                    }
                }}
                className="w-full relative flex flex-col items-center justify-center rounded-full "
            >
                <div className="w-full flex flex-col items-center justify-between pt-5">
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={skills}
                    >
                        <Image src={react} alt="React" />
                    </motion.div>
                </div>

                <div className="w-[50%] flex items-center justify-evenly pt-5">
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={skills}
                    >
                        <Image src={bootstrap} alt="Bootstrap" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={skills}
                    >
                        <Image src={tailwind} alt="Tailwind CSS" />
                    </motion.div>
                </div>
                
                <div className="w-full flex items-center justify-evenly pt-5 ">
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={skills}
                    >
                        <Image src={js} alt="JavaScript" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={skills}
                    >
                        <Image src={mongo} alt="MongoDB" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={skills}
                    >
                        <Image src={sql} alt="SQL" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={skills}
                    >
                        <Image src={firebase} alt="Firebase" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={skills}
                    >
                        <Image src={next} alt="Next.js" />
                    </motion.div>
                </div>

                <div className="w-[50%] flex items-center justify-evenly pt-5">
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={skills}
                    >
                        <Image src={node} alt="Node.js" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={skills}
                    >
                        <Image src={express} alt="Express.js" />
                    </motion.div>
                </div>
                <div className="flex items-center justify-evenly pt-5 ">
                    <motion.div
                        whileHover={{ scale: 1.3 }}
                        className={skills}
                    >
                        <Image src={c} alt="C++" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default Skills;

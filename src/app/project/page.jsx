'use client'
import React from 'react';
import Image from 'next/image';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import { useThemeContext } from '../context/theme';
import project1 from '../../../public/images/project1.png';
import project2 from '../../../public/images/project2.png';
import project3 from '../../../public/images/project3.png';
import project4 from '../../../public/images/project4.png';
import uttar from '../../../public/images/uttar.png';
import next from '../../../public/images/next.png';
import electrokart from '../../../public/images/electrokart.png';
import rollball from '../../../public/images/rollball.png';
import roll from '../../../public/images/roll.png';
import Hogwarts from '../../../public/images/Hogwarts.png';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSvelte,FaUnity,FaCogs, FaCode } from 'react-icons/fa';
import { SiNextdotjs, SiFramer, SiFirebase, SiMaterialdesign, SiVite, SiTypescript, SiRedux,SiBlender } from 'react-icons/si';


import AnimatedText from '@/components/AnimatedText';

const Page = () => {
  const { theme } = useThemeContext();

  return (
    <div className={`w-full mt-[5rem] text-center justify-center items-center ${!theme ? 'bg-[#2c3e50] text-[#f7f1e3]' : 'text-[#2c3e50]'}
    `}>
       <AnimatedText 
       className={`font-bold text-7xl inline-block !px-32 leading-relaxed text-center ${!theme ? 'text-[#f7f1e3]':''}
        sm:!text-4xl sm:text-center sm:!px-0
        md:!text-6xl
        lg:!text-6xl

       `}
       text='Imagination Trumps Knowledge !'
       />
      <div className="grid h-full grid-cols-2 gap-9 place-items-center py-[5rem]
       sm:block sm:w-full sm:h-full sm:px-3 sm:space-y-5
       md:gap-6 md:py-3
      ">


        {/* Project 1 */}
        <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : ''}
         sm:w-full sm:h-[60%] sm:px-3
         md:h-[70%]
        `}>
          <Image className='h-[40vh] w-full
           sm:h-[40%]
          ' src={uttar} />
          <h1 className='mt-5 font-bold text-2xl capitalize'>TripTrek</h1>
          <p className='my-3 font-base text-left'>
            I have designed and developed a user-friendly web application aimed at travel enthusiasts seeking budget-friendly travel packages across various destinations in India. Leveraging cutting-edge technologies such as React.js, Firebase, and Google authorization, the platform offers a seamless booking experience.
          </p>

          <div className='text-left flex items-center  my-2'>
          <FaReact size={30} style={{ color: '#61DAFB' }} />
         <FaCss3Alt size={30} style={{ color: '#1572B6' }} />
         <FaJs size={30} style={{ color: '#F7DF1E' }} />
         <SiFramer size={30} style={{ color: '#0055FF' }} />
         <SiVite size={30} style={{ color: '#646CFF' }} />
         <SiFirebase size={30} style={{ color: '#FFCA28' }} />
        </div>

          <div className='text-left flex items-center space-x-10 my-4'>
            <Link href={'https://travelling-desi.vercel.app/'} target='_blank'>
              <button className='bg-[#2c3e50] text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            </Link>
            <Link href={'https://github.com/Maverick0507/TravellingDesi'} target='_blank'>
              <BsGithub className='text-4xl cursor-pointer' />
            </Link>
          </div>
        </div>

        
         {/* Project 5 */}
         <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : ''}
        sm:w-full sm:h-[60%] sm:px-3
        md:h-[70%]

        `}>
          <Image className='h-[40vh] w-full
           sm:h-[40%]'
          
          src={Hogwarts} />
          <h1 className='mt-5 font-bold text-2xl capitalize'>Hogwarts</h1>
          <p className='my-3 font-base text-left'>
          Welcome to the magical world of Hogwarts! This project is a dynamic and interactive landing page inspired by the enchanting Harry Potter universe. Designed with a focus on immersive user experience, this page brings the magic of Hogwarts to life.
         </p>
         <div className='text-left flex items-center  my-2'>
         <FaHtml5 size={30} style={{ color: '#E34F26' }} />
         <FaCss3Alt size={30} style={{ color: '#1572B6' }} />
         <FaJs size={30} style={{ color: '#F7DF1E' }} />
         <SiFramer size={30} style={{ color: '#0055FF' }} />
        </div>
          <div className='text-left flex items-center space-x-10 my-4'>
            <Link href={'https://hogwarts-pied.vercel.app/'} target='_blank'>
              <button className='bg-[#2c3e50] text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            </Link>
            <Link href={'https://github.com/Maverick0507/hogwarts'} target='_blank'>
              <BsGithub className='text-4xl cursor-pointer' />
            </Link>
          </div>
        </div>

        
        {/* Project 2 */}
        <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : ''}
         sm:w-full sm:h-[60%] sm:px-3
         md:h-[70%]

        `}>
          <Image className='h-[40vh] w-full
           sm:h-[40%]
          '
           src={next} />
          <h1 className='mt-5 font-bold text-2xl capitalize'>Vanced</h1>
          <p className='my-3 font-base text-left'>
            I developed VANCED, a YouTube clone web application meticulously crafted using React.js and Material-UI. This project aims to replicate the core functionalities of YouTube, allowing users to watch videos fetched from the YouTube API and presented through a visually appealing and user-friendly interface.
          </p>

          <div className='text-left flex items-center  my-2'>
          <FaReact size={30} style={{ color: '#61DAFB' }} />
         <FaCss3Alt size={30} style={{ color: '#1572B6' }} />
         <FaJs size={30} style={{ color: '#F7DF1E' }} />
         <SiMaterialdesign size={30} style={{ color: '#0055FF' }} />
         <SiVite size={30} style={{ color: '#646CFF' }} />
         <SiFirebase size={30} style={{ color: '#FFCA28' }} />
        </div>
        
          <div className='text-left flex items-center space-x-10 my-4'>
            <Link href={'https://vanced-nine.vercel.app/'} target='_blank'>
              <button className='bg-[#2c3e50] text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            </Link>
            <Link href={'https://github.com/Maverick0507/Vanced'} target='_blank'>
              <BsGithub className='text-4xl cursor-pointer' />
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : ''}
        sm:w-full sm:h-[60%] sm:px-3
        md:h-[70%]

        `}>
          <Image className='h-[40vh] w-full
           sm:h-[40%]'
          
          src={project3} />
          <h1 className='mt-5 font-bold text-2xl capitalize'>JavaMyntra</h1>
          <p className='my-3 font-base text-left'>
            JavaMyntra is a dynamic ecommerce clothing web application, meticulously developed using a powerful technology stack comprising MongoDB, React, Node.js, and Express.js. This platform offers users a secure and seamless shopping experience for a diverse range of clothing items.
          </p>
          <div className='text-left flex items-center space-x-10 my-4'>
            <Link href={'https://talented-teal-loincloth.cyclic.app/'} target='_blank'>
              <button className='bg-[#2c3e50] text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            </Link>
            <Link href={'https://github.com/Maverick0507/Shopping'} target='_blank'>
              <BsGithub className='text-4xl cursor-pointer' />
            </Link>
          </div>
        </div>

         {/* Project 4 */}
         <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : ''}
        sm:w-full sm:h-[60%] sm:px-3
        md:h-[70%]

        `}>
          <Image className='h-[40vh] w-full
           sm:h-[40%]'
          
          src={roll} />
          <h1 className='mt-5 font-bold text-2xl capitalize'>RollBall</h1>
          <p className='my-3 font-base text-left'>
           Roll a Ball is an unity 3D game developed using C# and Unity 3D. The game is a simple game where the player has to collect the coins and avoid the obstacles. The game has a simple user interface and is easy to play.
          </p>

          <div className='text-left flex items-center  my-2'>
          <FaUnity size={30} style={{ color: '#61DAFB' }} />
         <FaCogs size={30} style={{ color: '#1572B6' }} />
         <FaCode size={30} style={{ color: '#F7DF1E' }} />
         
         <SiBlender size={30} style={{ color: '#646CFF' }} />
        
        </div>
          <div className='text-left flex items-center space-x-10 my-4'>
            <Link href={'https://roll-ball-unity.vercel.app/'} target='_blank'>
              <button className='bg-[#2c3e50] text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            </Link>
            <Link href={'https://github.com/Maverick0507/RollBallUnity'} target='_blank'>
              <BsGithub className='text-4xl cursor-pointer' />
            </Link>
          </div>
        </div>

        


          {/* Project 6 */}
          <div className={`h-[100%] w-[40vw] flex flex-col p-6 shadow-2xl rounded-md shadow-[#5c4f30] ${!theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : ''}
        sm:w-full sm:h-[60%] sm:px-3
        md:h-[70%]

        `}>
          <Image className='h-[40vh] w-full
           sm:h-[40%]'
          
          src={electrokart} />
          <h1 className='mt-5 font-bold text-2xl capitalize'>ElectroMart</h1>
          <p className='my-3 font-base text-left'>
             ElectroMart is a dynamic ecommerce Electroninc web application, meticulously developed using a powerful technology stack comprising  Next js, MongoDB. This platform offers users a secure and seamless shopping experience for a diverse range of Electronic items.
          </p>

          <div className='text-left flex items-center  my-2'>
          <FaReact size={30} style={{ color: '#61DAFB' }} />
          <SiNextdotjs size={30} style={{ color: '#000000' }} />
         <FaCss3Alt size={30} style={{ color: '#1572B6' }} />
         <FaJs size={30} style={{ color: '#F7DF1E' }} />
         <SiFramer size={30} style={{ color: '#0055FF' }} />
         <SiVite size={30} style={{ color: '#646CFF' }} />
         <SiFirebase size={30} style={{ color: '#FFCA28' }} />
        </div>
          <div className='text-left flex items-center space-x-10 my-4'>
            <Link href={'https://electro-mart.vercel.app/'} target='_blank'>
              <button className='bg-[#2c3e50] text-white px-12 py-3 rounded-md text-md font-semibold'>Visit Project</button>
            </Link>
            <Link href={'https://github.com/Prashant-2505/electroMart'} target='_blank'>
              <BsGithub className='text-4xl cursor-pointer' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

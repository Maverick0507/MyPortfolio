'use client'

import Image from 'next/image'
import profile from '../../public/images/profile.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { useThemeContext } from './context/theme'

export default function Home() {

  const { theme } = useThemeContext()

  return (
    <main className={`flex h-full w-full  items-center justify-between mt-[5rem]  lg:flex-col lg:pt-9   ${theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : 'bg-[#2c3e50] text-[#f7f1e3]'}`}>
      <div className=" w-[50%] h-full md:w-[80%]  md:h-[50vh] lg:w-[100%] lg:h-[60%] flex justify-center items-center  md:inline-block">
        <Image
          priority={true}
          className='h-[70%] w-[80%] 
           sm:h-[40vh] sm:mb-12
           md:w-full md:h-[50vh] 
           sm:w-full 
           ' src={profile} alt='Ayush' />
      </div>

      <div className={`w-[50%] h-[80%] p-5 flex flex-col items-center self-center text-left lg:w-full lg:text-center lg:pt-0 lg:mt-0 sm:p-0 `}>
        <AnimatedText
          text="Turning Vision Into Reality With Code And Design"
          className={`
          ${theme ? ' text-[#2c3e50]' : ' text-[#f7f1e3]'}
               text-5xl
               sm:text-3xl
               md:text-5xl 
               lg:text-5xl lg:text-center
               xl:text-5xl
               `}
        />



        <p className={`my-4 text-base font-medium ${theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : 'bg-[#2c3e50] text-[#f7f1e3]'}
         sm
        `}>
          As a skilled full-stack developer, I am to turning ideas into innovative web applications, Explore my latest projects , showcasing my expertise in React.js , Next.js and web development
        </p>
        <div className=" flex items-center self-start my-9 lg:self-center">
          <Link
            className={`flex  items-center gap-2 border-[2px] ${theme ? 'bg-[#2c3e50] text-white' : 'bg-[#f7f1e3] text-[#2c3e50]'} p-2.5 px-6 rounded-lg text-lg font-semibold ${theme ? 'hover:bg-white hover:text-[#2c3e50] transition 0.3s ease-in hover:border-[2px]' : 'hover:bg-[#2c3e50] hover:text-white transition 0.3s ease-in border-[2px] border-[#2c3e50] hover:border-[2px]'} `}
            download={true}
            target={'_blank'}
            href="/Ayush-Resume.pdf">
            <p>Resume</p>
            <BsFillArrowDownCircleFill />
          </Link>
          <Link
            className=' ml-4 text-lg font-medium capitalize text-dark underline'
            target={'_blank'} href="mailto:ayushdwivedi0507@gmail.com">
            Contact
          </Link>

        </div>
      </div>
    </main>
  )
}

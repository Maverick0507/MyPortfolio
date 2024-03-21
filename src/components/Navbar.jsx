'use client'
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import Logo from './Logo';
import { usePathname, useRouter } from 'next/navigation';
import { BsLinkedin, BsGithub, BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { SiHackerrank, SiLeetcode } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useThemeContext } from '@/app/context/theme';




const CustomLink = ({ href, title, className }) => {
    const path = usePathname()
    const { theme, setTheme } = useThemeContext();

    return (

        <Link href={href}>
            <href className={`${className} relative group`}>
                {title}
                <span
                    className={`h-[1px] inline-block w-0 ${theme ? 'bg-[#2c3e50]' : 'bg-white'} absolute left-0 -bottom-0.5 group-hover:w-full transition-width ease duration-300 ${path === href ? 'w-full' : 'w-0'}`}
                >
                    &nbsp;
                </span>

            </href>
        </Link>
    );
}



const CustomMobileLink = ({ href, title, className, toggle }) => {
    const path = usePathname()
    const { theme, setTheme } = useThemeContext();
    const router = useRouter()

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (

        <button onClick={() => handleClick()}>
            <href className={`${className} relative group mxy-3 ${theme ? 'text-[#2c3e50]':'text-[#f7f1e3]'}`}>
                {title}
                <span
                    className={`h-[1px] inline-block w-0 ${theme ? 'bg-[#2c3e50]' : 'bg-white'} absolute left-0 -bottom-0.5 group-hover:w-full transition-width ease duration-300 ${path === href ? 'w-full' : 'w-0'}`}
                >
                    &nbsp;
                </span>
            </href>
        </button>
    );
}


const Navbar = () => {
    const { theme, setTheme } = useThemeContext()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className={`w-full  px-32 py-9 font-medium flex items-center justify-between fixed top-0 z-20  ${theme ? 'bg-[#f7f1e3] text-[#2c3e50]' : 'bg-[#2c3e50] text-[#f7f1e3]'}  `}>


            <button
                onClick={handleClick}
                className='  flex-col justify-center items-center gap-1 cursor-pointer hidden lg:block'>
                {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </button>

            {/* // pc view */}
            <div className=" w-full flex justify-between items-center lg:hidden">
                <nav>
                    <CustomLink className='mr-4' href="/" title="Home" />
                    <CustomLink className='mx-4' href="/abouts" title="About" />
                    <CustomLink className='ml-4' href="/project" title="Projects" />
                </nav>


                <nav className='flex items-center justify-center gap-3 flex-wrap'>
                    <motion.a
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        href='www.linkedin.com/in/ayushkdwivedi'
                        target='_blank'
                        className='text-3xl text-blue-500'
                    >
                        <BsLinkedin />
                    </motion.a>
                    <motion.a
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        href='https://github.com/Maverick0507'
                        target='_blank'
                        className='text-3xl'
                    >
                        <BsGithub />
                    </motion.a>

                    <motion.a
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        href='https://leetcode.com/ayush_kt05/'
                        target='_blank'
                        className='text-3xl text-yellow-500'
                    >
                        < SiLeetcode />
                    </motion.a>

                    <motion.a
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        href='https://www.hackerrank.com/profile/ayushdwivedi0507'
                        target='_blank'
                        className='text-3xl text-green-500'
                    >
                        < SiHackerrank />
                    </motion.a>

                    <motion.a
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        target='_blank'
                        className={`text-3xl ${theme ? 'text-[#2c3e50]' : 'text-[#f7f1e3]'} cursor-pointer ml-9`}
                        onClick={() => setTheme(prevTheme => !prevTheme)}
                    >
                        {theme ? <BsFillSunFill /> : <BsFillMoonStarsFill />}

                    </motion.a>

                </nav>
            </div>

            {/* ..mobile view */}

            {isOpen ?
                <motion.div
                 initial={{opacity:0}}
                 animate={{opacity:1}}
                className=" min-w-[70vw] flex flex-col  justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white/20 rounded-lg backdrop-blur-md py-32">
                    <nav className=' flex items-center flex-col justify-center mb-5'>
                        <CustomMobileLink  href="/" title="Home" toggle={handleClick} />
                        <CustomMobileLink  href="/abouts" title="About" toggle={handleClick} />
                        <CustomMobileLink  href="/project" title="Projects" toggle={handleClick} />
                    </nav>


                    <nav className='flex items-center justify-center gap-3 flex-wrap'>
                        <motion.a
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            href='https://www.linkedin.com/in/prashant-sharma-ab9b0a209/'
                            target='_blank'
                            className='text-3xl text-blue-500'
                        >
                            <BsLinkedin />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            href='https://github.com/Prashant-2505'
                            target='_blank'
                            className='text-3xl'
                        >
                            <BsGithub />
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            href='https://leetcode.com/prashant_71200/'
                            target='_blank'
                            className='text-3xl text-yellow-500'
                        >
                            < SiLeetcode />
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            href='https://www.hackerrank.com/sharmaprashant23'
                            target='_blank'
                            className='text-3xl text-green-500'
                        >
                            < SiHackerrank />
                        </motion.a>

                        <motion.a
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            target='_blank'
                            className={`text-3xl flex justify-center items-center gap-3 ${theme ? 'text-[#2c3e50]' : 'text-[#f7f1e3]'} cursor-pointer ml-9`}
                            onClick={() => setTheme(prevTheme => !prevTheme)}
                        >
                            |{theme ? <BsFillSunFill /> : <BsFillMoonStarsFill />}

                        </motion.a>

                    </nav>
                </motion.div>
                : null
            }


            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>

        </header>
    )
};

export default Navbar;

"use client"
import React from 'react'
import {
  MobileNav, 
  Typography, 
  Button, 
  IconButton, 
} from "@material-tailwind/react"
import { useState, useEffect } from 'react'
import Image from 'next/image'

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false); 

  useEffect(() => {
    window.addEventListener(
      "resize", 
      () => window.innerWidth >= 960 && setOpenNav(false), 
    );
  }, [])

  const navList = (
<>
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-5 '>
        <Typography
          as="li"
          variant="medium"
          color="white"
          className="rounded-lg p-2 font-bold drop-shadow-lg hover:scale-125 duration-150  hover:bg-Secondary px-5"
        >
          <a href='#' className='flex items-center'>
            Home
          </a>
        </Typography>

        <Typography
          as="li"
          variant="medium"
          color="white"
          className="rounded-lg p-2 font-bold drop-shadow-lg hover:scale-125 duration-150  hover:bg-Secondary px-5"
        >
          <a href='#' className='flex items-center'>
            About Us
          </a>
        </Typography>

        <Typography
          as="li"
          variant="medium"
          color="white"
          className="rounded-lg p-2 font-bold drop-shadow-lg hover:scale-125 duration-150  hover:bg-Secondary px-5"
        >
          <a href='#' className='flex items-center'>
            Contact Us
          </a>
        </Typography>

        <Typography
          as="li"
          variant="medium"
          color="white"
          className="rounded-lg p-2 font-bold drop-shadow-lg hover:scale-125 duration-150  hover:bg-Secondary px-5"
        >
          <a href='#' className='flex items-center'>
            Meet the Staff
          </a>
        </Typography>

        <Typography
          as="li"
          variant="medium"
          color="white"
          className="border-solid rounded-lg p-2 font-bold drop-shadow-lg hover:scale-125 duration-150  hover:bg-Secondary px-5"
        >
          <a href='#' className='flex items-center'>
            Donate Now!
          </a>
        </Typography>

    </ul>


</>
  )

  

  return (
    <div className='py-2 px-4 lg:px-8 lg:py-4 shadow-lg bg-Primary '>
      <div className='mx-auto flex items-center  justify-between text-blue-gray-900'>
        <Image
          src="/adoptt__logo.png"
          width={160}
          height={200}
          alt='adopt logo'
          objectFit='cover'
        />
        <div className='hidden lg:flex'>{navList}</div>
        <IconButton
          variant="text"
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill='none'
              className='h-6 w-6'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className='container mx-auto'>
          {navList}
        </div>
      </MobileNav>
    </div>
  )
}

export default Navigation
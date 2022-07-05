import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import {AiOutlineLogout} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'
import {BiVideo} from 'react-icons/bi'

import Logo from '../utils/tiktik-logo.png';

const Navbar = () => {
  return (
    <div className="w-full flex justify-between border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
         <div className="w-[100px] md:w-[130px]">
          {/* test Image */}
            {/* <Image 
               className="cursor-pointer"
               src={Logo}
              alt="logo"
              layout="responsive"
            /> */}
            <div className="text-4xl">
              <h1 className="flex">Vidly<BiVideo  className="text-5xl"/></h1>
            </div>
         </div>
      </Link>
    </div>
  )
}

export default Navbar
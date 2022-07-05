import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { GoogleOAuthProvider } from '@react-oauth/google'
import {AiOutlineLogout} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'
import {BiVideo} from 'react-icons/bi'
import {GoogleLogin, googleLogout} from '@react-oauth/google'
import useAuthStore from '../store/authStore'

import Logo from '../utils/tiktik-logo.png';
import { createOrGetUser } from '../utils'

const Navbar = () => {
  const {userProfile, addUser} = useAuthStore()
  return (

    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
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
        <div>
          search
        </div>
        <div>
          {userProfile ? (
            <div>{userProfile.userName}</div>
          ):(
            <GoogleLogin 
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log("Error")}
            />
          )}
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default Navbar
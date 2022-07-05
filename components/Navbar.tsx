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

import { createOrGetUser } from '../utils'

const Navbar = () => {
  const {userProfile, addUser, removeUser} = useAuthStore()
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
                <a href="/" className="flex">Vidly<BiVideo  className="text-5xl"/></a>
              </div>
           </div>
        </Link>
        <div>
          search
        </div>

        <div>
          {userProfile ? (
            <div className="flex gap-5 md:gap-10">
              <Link href='/upload'>
                <button className="border-2 px-2 md:px-4 text-md font-semibold flex items-center gap-2">
                    <IoMdAdd className="text-xl"/>
                    <span className="hidden md:block">Upload</span>
                </button>
              </Link>
              {userProfile.image && (
                <Link href='/'>
                <>
                      <Image
                        width={40}
                        height={40}
                        className="rounded-full cursor-pointer"
                        src={userProfile.image}
                        alt="posted"
                     />
                    </>
                </Link>
             )}
             <button
               type='button'
               className=' border-2 p-2 rounded-full cursor-pointer outline-none shadow-md'
               onClick={() => {
                 googleLogout();
                 removeUser();
               }}
             >
               <AiOutlineLogout color='red' fontSize={21} />
             </button>
         </div>
       ) : (
           <GoogleLogin
             onSuccess={(response) => createOrGetUser(response, addUser)}
             onError={() => console.log('Login Failed')}
           />
       )}
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default Navbar
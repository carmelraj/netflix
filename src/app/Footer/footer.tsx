'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// import Pic from '../../../';
// import { Image } from 'next/image';
export default function Footer() {
    
  return (<>
    <div className='pb-14 footerSection pt-20 sm:pb-20 text-center flex justify-center'>
      <div className='flex w-full max-w-7xl'>
        <div className='flex-auto'>
              <div className='sm:px-8 flex flex-col text-left'>    
                 <h6 className='text-sm'>Questions? <Link className='text-sm underline' href="#">Call 000-800-919-1694</Link></h6>        
              <div className="flex flex-row flex-1 mt-4">
  <div className='flex flex-1 flex-col text-left'>
        <Link className='text-sm underline' href="#">FAQ</Link>
        <Link className='text-sm mt-4 underline' href="#">Investor Relations</Link>
        <Link className='text-sm mt-4 underline' href="#">Privacy</Link>
        <Link className='text-sm mt-4 underline' href="#">Speed Test</Link>
  </div>
  <div className='flex flex-1 flex-col text-left'>
        <Link className='text-sm underline' href="#">Help Center</Link>
        <Link className='text-sm mt-4 underline' href="#">Jobs</Link>
        <Link className='text-sm mt-4 underline' href="#">Cookie Preferences</Link>
        <Link className='text-sm mt-4 underline' href="#">Legal Notices</Link>
  </div>
  <div className='flex flex-1 flex-col text-left'>
        <Link className='text-sm underline' href="#">Account</Link>
        <Link className='text-sm mt-4 underline' href="#">Ways to Watch</Link>
        <Link className='text-sm mt-4 underline' href="#">Corporate Information</Link>
        <Link className='text-sm mt-4 underline' href="#">Only on Netfix</Link>
  </div>
  <div className='flex flex-1 flex-col text-left'>
        <Link className='text-sm underline' href="#">Media Centre</Link>
        <Link className='text-sm mt-4 underline' href="#">Terms of Use</Link>
        <Link className='text-sm mt-4 underline' href="#">Contact Us</Link>        
  </div>
</div>


              </div>
        </div>
      </div>
  </div>  
  </>)
}
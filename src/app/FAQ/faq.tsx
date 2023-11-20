'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// import Pic from '../../../';
// import { Image } from 'next/image';
export default function Login() {
    const [data, setData] = useState([
        {"heading":"What is Netflix?","desc":"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"},
        {"heading":"How much does Netflix cost?","desc":"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."},
        {"heading":"Where can I watch?","desc":"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."},
        {"heading":"How do I cancel?","desc":"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime."},
        {"heading":"What can I watch on Netflix?","desc":"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."},
        {"heading":"Is Netflix good for kids?","desc":"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."}
      ])
    const [id,setId] = useState(null)
    const openAccordion = (index:any) => {
        setId(index)
        console.log(index)
    }
  return (<>
    <div className='pb-14 faqSection pt-20 sm:pb-20 text-center flex justify-center'>
      <div className='flex w-full max-w-7xl'>
        <div className='flex-auto'>
              <div className='sm:px-8 flex flex-col items-center'>
                  <h2 className='text-4xl'>Frequently Asked Questions</h2>
                  <div className='accordion w-full mt-7'>
                  {
                    data?.map((item,index)=>(
                        <div key={index} className='mb-3'>    
                                <div className='head text-2xl' onClick={()=>openAccordion(index)} key={index}>{item.heading} <span className='text-2xl'>{id && id == index ?'x':'+'}</span></div>
                                <div className={`${id == index  ?'show':'hide'} content text-2xl` } >{item.desc}</div>
                        </div>

                    ))
                  }
                  
                        
                  </div>
                  <div className='form flex text-center flex-col mt-9'>
                            <h6 className='text-xl'>Ready to watch? Enter your email to create or restart your membership.</h6>
                            <form className='pt-4'><input placeholder='Email address' type='text' className='rounded-md' /><button className='bg-red py-3 px-5 text-sm rounded-md ml-2 text-xl'>Get Started <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" className="default-ltr-cache-4z3qvp e1svuwfo1 inline-block" data-name="ChevronRight" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg></button></form>
                  </div>
              </div>
        </div>
      </div>
  </div>  
  </>)
}
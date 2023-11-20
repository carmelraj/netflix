import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Login() {
  const list = [[{name:'hollywood'},{name:'bollywoord'},{name:'tollywood'}]]  
  return (
  <main className='layout cardHeader relative h-screen inset-0 flex justify-center sm:px-8'>
    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='image' />
    <div className='shadows'></div>
    <div className='flex w-full max-w-7xl lg:px-8'>
    <div className='flex-auto'>
    <header>
          <Link href="/"><span className="default-ltr-cache-0 ev1dnif0" data-uia="nmhp-card-header+logo">
            <svg viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="default-ltr-cache-1d568uk ev1dnif2"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path></g></svg></span>
            </Link>
          <Link className='signin bg-red py-3 px-5 text-sm rounded-md'  href="/">Sign In</Link>
    </header>  
        <div className='sm:px-8 flex items-center h-full'>
              <div className='mx-auto w-full max-w-7xl lg:px-8'>
                  <div className='relative px-4 sm:px-8 lg:px-12'>
                      <div className='mx-auto max-w-2xl lg:max-w-5xl text-center'>                                                   
                            <h1 className='text-9xl py-4 leading-5 font-bold tracking-tight sm:text-5xl'>
                            The biggest local and international hits. The best stories. All streaming here.
                            </h1>
                            <h5 className='text-2xl py-4'>Watch anywhere. Cancel anytime.</h5>
                            <p className='text-xl'>Ready to watch? Enter your email to create or restart your membership.</p>
                            <form className='pt-4'>
                              <input placeholder='Email address' type='text' className='rounded-md' />
                              <button className='bg-red py-3 px-5 text-sm rounded-md ml-2 text-xl'>Get Started <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" className="default-ltr-cache-4z3qvp e1svuwfo1 inline-block" data-name="ChevronRight" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg></button>
                              </form>                          
                      </div>
                  </div>
              </div>
        </div>
    </div>
    </div>
  </main>
  )
}

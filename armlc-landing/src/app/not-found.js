// app/not-found.js
'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col bg-[#FEFFEF] w-full overflow-hidden    h-screen justify-around md:justify-evenly items-center'>
        <img src='/logo2.svg' alt='logo' className=' max-md:w-64  w-96'/>
      <div className=' flex justify-evenly flex-wrap w-full items-center  '>
        <div className=' text-3xl  max-sm:order-1 max-md:w-full justify-center '> <p className='text-center'> OUPS...</p></div>
            <img src='/404.svg' alt='404' className=' max-md:mb-20 max-sm:order-0 max-sm:w-96 w-128'/>
            <div className=' text-3xl w-40 font-normal text-center max-sm:order-2 max-md:w-full'> <p>PAGE INTROUVABLE</p></div>
      </div>
      <Link href="/">
        <button className='text-white cursor-pointer w-sm font-medium text-lg bg-amber-400 py-4 rounded-lg '>
          RETOUR A L'ACCUEIL
        </button>
      </Link>
    </div>
  );
}

"use client";

import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div>

      <div className="float-right mt-5">
        <Link href="get-started" className="text-[#21d760] text-xl sm:text-l px-3 py-3 mr-10  hover:text-green-600 transition">
          sign in
        </Link>
      </div>


      <div className="flex flex-col items-center justify-center h-screen">        
        
        <div className="flex text-2xl sm:text-4xl"> {/* wrapper for header text with typewriter effect */}
          <h3>spotify wrapped but&nbsp;</h3>
          <Typewriter
              onInit={(typewriter) => { 
                typewriter.typeString('<em><span style="font-weight:bold; color: #21d760;">better</span></em>')
                .start();
              }} 
          /> 

        </div>

        {/* <p>spotify wrapped but <b className="italic text-green-600">better</b></p> */}
        <Link href="get-started" className="bg-[#21d760] text-white text-xl sm:l px-7 py-3 mt-5 rounded-full hover:scale-110 hover:bg-green-800 transition">Get Started</Link>

      </div>





    </div>
      

      
    

    
  );
}

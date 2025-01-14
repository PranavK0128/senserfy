"use client";

import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
       <div className="flex text-2xl sm:text-4xl"> {/* wrapper for header text with typewriter effect */}
        <h3 className="">spotify wrapped but&nbsp;</h3>
        <Typewriter
            onInit={(typewriter) => { 
              typewriter.typeString('<em><span style="font-weight:bold; color: rgb(22 101 52 / var(--tw-text-opacity, 1));">better</span></em>')
              .start()
              .stop();
            }} 
        /> 

      </div>

      {/* <p>spotify wrapped but <b className="italic text-green-600">better</b></p> */}
      <Link href="get-started" className="bg-green-800 text-white text-xl sm:l px-7 py-3 mt-5 rounded-full hover:scale-110 hover:bg-green-900 transition">Get Started</Link>
    </div>
    

    
  );
}

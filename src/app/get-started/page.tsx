"use client";

import React from 'react';
import Link from 'next/link';
import {Input} from "@nextui-org/input";
import { FcGoogle } from "react-icons/fc";
import { FaSpotify } from "react-icons/fa";


export default function getStarted() {
  return (
    <div>

      <div className="flex flex-col items-center justify-center h-screen">        
        
        <div className="text-2xl sm:text-4xl"> 
          <h3>get started</h3>

          <div className="flex gap-10 mt-10 justify-center">
            <Link href="google-auth">
              <FcGoogle style={{scale: '1.5'}}/>
            </Link>

            <Link href="spotify-auth">
              <FaSpotify style = {{fill: '#21d760', scale: '1.5'}}/>
            </Link>
          </div>
          
        </div>

      </div>


    </div>
      

      
    

    
  );
}

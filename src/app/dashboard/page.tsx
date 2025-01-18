"use client";

import React from 'react';
import Link from 'next/link';
import {Input} from "@nextui-org/input";
import DataStatsOne from "@/components/dashboard/DataStatsOne";



export default function getStarted() {
  return (
    <div>

      <div className="flex flex-col items-center justify-center h-screen">        
      <DataStatsOne/>
        

      </div>


    </div>
      

  );
}

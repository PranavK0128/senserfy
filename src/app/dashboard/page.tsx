"use client";

import React from 'react';
import Link from 'next/link';
import {Input} from "@nextui-org/input";
import QuickDataStats from "@/components/dashboard/QuickDataStats";
import GraphStats from "@/components/dashboard/GraphStats";

export default function getStarted() {
  return (
    <div>

      <div className="flex flex-col items-center justify-center h-screen">        
      <QuickDataStats/>
      <GraphStats/>
        

      </div>


    </div>
      

  );
}

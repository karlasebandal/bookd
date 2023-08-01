import React from 'react'
import React, { useState } from "react";
import banner from '../assets/images/raft-photos/banner.jpg';

const Banner = () => {

  const [value, setValue] = useState()

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (

    <div class="flex flex-wrap items-center justify-between">
      <img src={banner} class="static" alt="Rafting" />
      
      <div class="absolute">
        <div class="">
          
              <div className="text-purity text-8xl font-header">FEEL THE RUSH, <br/>DISCOVER <br/>DAVAO RIVER</div>
          
          <div class="items-center justify-between">
              <label for="services" class="block mb-2 text-sm font-medium text-rescue-orange dark:text-white rounded-lg">Pick your adventure</label>
                <select value={value} onChange={handleChange} id="services" class="bg-gray-50 border border-navy-blue text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="rafting">Whitewater Rafting</option>
                    <option value="rope">Rope Access Services</option>
                    <option value="team building">Team Buizlding</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="training">Water Sports Training</option>
                </select>
          </div>

          <p>I chose {value}</p>
        </div>
      </div>
    </div>

    // <div class="flex flex-wrap items-center justify-between relative">
         
        
    //     <div class="flex flex-row absolute top-50 absolute">
    
          
          
    //       <div class="flex flex-col justify-between mx-auto p-4">
              
    //       </div>

    //     </div>    
    // </div>
  )
}

export default Banner
import React from 'react'
import banner from '../assets/images/raft-photos/banner.jpg';

const Banner = () => {
  return (

    <div class="flex flex-wrap items-center justify-between">
      <img src={banner} class="static" alt="Rafting" />
      
      <div class="absolute">
        <div class="">
          
              <div className="text-purity text-8xl font-header">FEEL THE RUSH, <br/>DISCOVER <br/>DAVAO RIVER</div>
          
          <div class="items-center justify-between">
              <label for="services" class="block mb-2 text-sm font-medium text-rescue-orange dark:text-white rounded-lg">Pick your adventure</label>
                <select id="services" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Whitewater Rafting</option>
                    <option>Rope Access Services</option>
                    <option>Team Building</option>
                    <option>Manufacturing</option>
                    <option>Water Sports Training</option>
                </select>
          </div>
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
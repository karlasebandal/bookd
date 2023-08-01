import React, { useState } from "react"
import { Button } from 'flowbite-react';


import banner from '../assets/images/raft-photos/banner.jpg';
import Booking from '../pages/Booking.js'

const Banner = () => {

  const [value, setValue] = useState('')

  const handleOptionChange = (event) => {
    setValue(event.target.value)
  }

  const handleRedirect = () => {
    // if (value){
    //   history.push('/${value}')
    // }
  }

  return (

    <div class="flex flex-wrap items-center justify-between">
      
        <img src={banner} class="static" alt="Rafting" />
        
        <div class="absolute">
          <div class="">
            <div className="text-purity text-8xl font-header bg-transparent">FEEL THE RUSH, <br/>DISCOVER <br/>DAVAO RIVER</div>
         
            <div class="w-full items-center justify-between absolute">
              <label for="services" class=" block mb-2 text-xl font-medium text-rescue-orange dark:text-white rounded-lg">Pick your adventure</label>
                <select 
                  value={value} 
                  onChange={(event) => setValue(event.target.value)} 
                  id="services" 
                  class="bg-gray-50 border border-navy-blue text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="#">Select an option</option>
                    <option value="rafting" to="./pages/Booking.js">Whitewater Rafting</option>
                    <option value="rope">Rope Access Services</option>
                    <option value="team building">Team Building</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="training">Water Sports Training</option>
                </select>

                <a href={Booking}>
                  <Button onClick={handleRedirect}>
                    <div className="text-right">
                      <div className="mb-1 text-xl text-rescue-orange">
                        NEXT
                      </div>
                    </div>
                  </Button>
                </a>

                <p>I Chose {value}</p>
            </div>
            
          </div> 
        </div>
      
    </div>
    
  )
}

export default Banner
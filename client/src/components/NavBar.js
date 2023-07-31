import React from 'react'
import '../assets/styles/NavBar.css'
import logo from '../assets/images/logo-type.svg';

const NavBar = () => {
  return (
    <div class="flex flex-wrap items-center justify-between">
        <nav class="bg-marble-blue dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center">
                    <img src={logo} class="h-8 mr-3" alt="Flowbite Logo" />
                </a>
                <div class="flex md:order-2">
                    <button type={"button"} class="text-white bg-rescue-orange hover:bg-rescue-orange-dark focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium font-header rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">BOOK NOW!</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-marble-blue md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-marble-blue dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-purity font-header bg-rescue-orange rounded md:bg-transparent md:text-rescue-orange md:p-0 md:dark:text-rescue-orange" aria-current="page">ABOUT</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-purity font-header rounded hover:bg-navy-blue md:hover:bg-transparent md:hover:text-navy-blue md:p-0 md:dark:hover:text-rescue-orange dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">SERVICES</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-purity font-header rounded hover:bg-navy-blue md:hover:bg-transparent md:hover:text-navy-blue md:p-0 md:dark:hover:text-rescue-orange dark:text-white dark:hover:bg-gray-700 dark:hover:text-rescue-orange md:dark:hover:bg-transparent dark:border-gray-700">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default NavBar
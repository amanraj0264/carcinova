import React from 'react'
import StarIcon from '@mui/icons-material/Star';


import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default function Footer() {
    return (

       <div className=''id='footer-bg'>
         <div className=' bg-black opacity-85 text-white mx-auto  '>
            <div className='  max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 py-28 px-6 '>

                <div className='space-y-6'>
                    <div className='flex items-center space-x-5'>
                        <StarIcon />
                        <h3 className='font-playfair text-2xl font-medium'>Carcinova</h3>
                    </div>
                    <p className='leading-10 text-[#7C7D7D]'>Carcinova was founded in May 2020 by a handful group of highly experienced oncologists and doctors from Odisha, who closely work with patients in this part of the world and understand the challenge.</p>

                    <div className='flex space-x-2 items-center'>
                        <ShortcutOutlinedIcon />
                        <div className='block py-1 px-1  rounded-full bg-color-primary hover:bg-white hover:text-color-primary duration-200  ease-in-out'>

                            <FacebookIcon className='rounded-xl duration-200 ease-in-out py-0.7'></FacebookIcon>
                        </div>

                        <div className='block py-1 px-1  rounded-full bg-color-primary hover:bg-white hover:text-color-primary duration-200  ease-in-out'>

                            <TwitterIcon className='rounded-xl duration-200 ease-in-out py-0.7'></TwitterIcon>
                        </div>

                        <div className='block py-1 px-1  rounded-full bg-color-primary hover:bg-white hover:text-color-primary duration-200  ease-in-out'>

                            <InstagramIcon className='rounded-xl duration-200 ease-in-out py-0.7'></InstagramIcon>
                        </div>

                        <div className='block py-1 px-1  rounded-full bg-color-primary hover:bg-white hover:text-color-primary duration-200  ease-in-out'>

                            <LinkedInIcon className='rounded-xl duration-200 ease-in-out py-0.7'></LinkedInIcon>
                        </div>



                    </div>


                </div>


                {/* quick Links */}
                <div className='space-y-7 '>
                    <h3 className='font-playfair text-2xl font-medium'>Quick Links</h3>
                    <div className='space-y-2 text-[#7C7D7D]'>
                        <div className='group duration-700'>
                            <NavigateNextIcon className='group-hover:text-color-primary'></NavigateNextIcon>
                            <span className='hover:tracking-[.25em] group-hover:text-color-primary duration-700'>About Us</span>
                        </div>

                        <div className='group duration-700'>
                            <NavigateNextIcon className='group-hover:text-color-primary'></NavigateNextIcon>
                            <span className='hover:tracking-[.25em] group-hover:text-color-primary duration-700'>Contact Us</span>
                        </div>

                        <div className='group duration-700'>
                            <NavigateNextIcon className='group-hover:text-color-primary'></NavigateNextIcon>
                            <span className='hover:tracking-[.25em] group-hover:text-color-primary duration-700'>Privacy Policy</span>
                        </div>


                        <div className='group duration-700'>
                            <NavigateNextIcon className='group-hover:text-color-primary'></NavigateNextIcon>
                            <span className='hover:tracking-[.25em] group-hover:text-color-primary duration-700'>Terms & Conditions</span>
                        </div>


                        <div className='group duration-700'>
                            <NavigateNextIcon className='group-hover:text-color-primary'></NavigateNextIcon>
                            <span className='hover:tracking-[.25em] group-hover:text-color-primary duration-700'>Our Blog & News</span>
                        </div>

                        <div className='group duration-700'>
                            <NavigateNextIcon className='group-hover:text-color-primary'></NavigateNextIcon>
                            <span className='hover:tracking-[.25em] group-hover:text-color-primary duration-700'>Our Team</span>
                        </div>


                    </div>


                </div>



                {/* Services Links */}
                <div className='space-y-7 '>
                    <h3 className='font-playfair text-2xl font-medium'>Quick Links</h3>
                    <div className='space-y-2 text-[#7C7D7D]'>
                        <div className='group duration-700'>
                            <NavigateNextIcon className='group-hover:text-color-primary'></NavigateNextIcon>
                            <span className='hover:tracking-[.25em] group-hover:text-color-primary duration-700'>All Services</span>
                        </div>
                        <div className='group duration-700'>
                            <NavigateNextIcon className='group-hover:text-color-primary'></NavigateNextIcon>
                            <span className='hover:tracking-[.25em] group-hover:text-color-primary duration-700'>Chemotherapy</span>
                        </div>

                        <div className='group duration-700'>
                            <NavigateNextIcon className='group-hover:text-color-primary'></NavigateNextIcon>
                            <span className='hover:tracking-[.25em] group-hover:text-color-primary duration-700'>Radiation</span>
                        </div>


                        <div className='group duration-700'>
                            <NavigateNextIcon className='group-hover:text-color-primary'></NavigateNextIcon>
                            <span className='hover:tracking-[.25em] group-hover:text-color-primary duration-700'>X-Ray</span>
                        </div>


                        <div className='group duration-700'>
                            <NavigateNextIcon className='group-hover:text-color-primary'></NavigateNextIcon>
                            <span className='hover:tracking-[.25em] group-hover:text-color-primary duration-700'>Pet-ct</span>
                        </div>

                        <div className='group duration-700'>
                            <NavigateNextIcon className='group-hover:text-color-primary'></NavigateNextIcon>
                            <span className='hover:tracking-[.25em] group-hover:text-color-primary duration-700'>Pathology</span>
                        </div>


                    </div>


                </div>

                {/* Contact Info Links */}
                <div className='space-y-5  text-[#7C7D7D]'>
                    <h3 className='font-playfair text-2xl font-medium text-white'>Contact Info</h3>


                    <div className='group duration-700 '>
                        <LocationOnIcon className='group-hover:text-color-primary '></LocationOnIcon>
                        <span className='hover:tracking-[.17em] group-hover:text-color-primary duration-700 pl-2'>Carcinova Cancer Hospital, Nuapatna, Near CDA, Cuttack, Jemadeipur, Odisha 754027</span>
                    </div>


                    <div className='group duration-700'>
                        <EmailIcon className='group-hover:text-color-primary'></EmailIcon>
                        <span className='hover:tracking-[.12em] group-hover:text-color-primary duration-700 pl-2'>carcinovahospital@gmail.com</span>
                    </div>

                    <div className='group duration-700'>
                        <LocalPhoneIcon className='group-hover:text-color-primary'></LocalPhoneIcon>
                        <span className='hover:tracking-[.18em] group-hover:text-color-primary duration-700 pl-2'>+91 94381 63280</span>
                    </div>



                </div>



                <div>






                </div>

            </div>
            


        </div>
       </div>



    )
}

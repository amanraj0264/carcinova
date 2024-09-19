import React from 'react'
import DoneIcon from '@mui/icons-material/Done';

import FAQ from './image/video-img.jpg'


export default function Faq() {

    

    return (
        
        <div className='max-w-[1320px] mx-auto py-20 grid md:grid-cols-2 gap-8 px-6 lg:px-0 ' >
            <div className='px-6'>
                <div className=' flex items-center  '>
                    <div>
                        <h5 className=' font-playfair  text-color-primary uppercase text-2xl'>Solutions To Your Pain</h5>
                    </div>

                    <div className='space-y-1 px-2'>
                        <div className='bg-color-primary h-[2px] w-24 rounded'></div>
                        <div className='bg-color-primary h-[2px] w-12 rounded'></div>
                    </div>

                </div>




                <h1 className='font-playfair text-5xl font-medium '>Best Quality Services With Minimal Pain Rate</h1>

                <p className='py-6'>At Carcinova Cancer Hospital, we are dedicated to providing exceptional care and support to our patients and their families. We understand that navigating through cancer treatment can be challenging, and we are here to help every step of the way.</p>

                <div className=''>
                    <div className='flex py-4 gap-4'>
                        <div>
                            <DoneIcon className='text-color-primary '></DoneIcon>
                        </div>

                        <div>
                            <h5 className='text-xl font-medium font-playfair'>Cancer Treatment</h5>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-10 items center'>
                        <div>
                            <p>If you have any questions, need more information about our services, or would like to schedule an appointment, please don't hesitate to reach out to us. Our compassionate and knowledgeable staff is available to assist you with any concerns or inquiries you may have.

                            </p>

                            <p className='pt-9'>You can contact us via phone, email, or by visiting our hospital. Our contact details are as follows:</p>
                            <div className='py-6'>
                                <button className='btn2'>More Details</button>
                            </div>
                        </div>

                        <div className=''>
                            <img src={FAQ} className='w-full  rounded-2xl lg:w-ful h-full md:h-80%' alt='Faq'></img>

                        </div>
                    </div>





                </div>

            </div>




            {/* form */}
            <div className='bg-[#fae3da] rounded-2xl p-10'>


                <div className=' '>
                    <form>
                        <h4 className='uppercase text-color-primary text-2xl'>Get In Touch</h4>
                        <h2 className='font-playfair text-5xl text-black pb-7 pt-8'>Get Appointment</h2>
                        <div className=' grid lg:grid-cols-2   gap-5'>

                            <input className='h-10  text-1xl py-7 rounded-2xl p-4 border-color-primary border-2 bg-[#fae3da] focus:outline-none ' type='text' placeholder='First Name'></input>

                            <input className='h-10  text-1xl py-7 rounded-2xl p-4 border-color-primary border-2 bg-[#fae3da] focus:outline-none ' type='text' placeholder='Email'></input>

                            <input className='h-10  text-1xl py-7 rounded-2xl p-4 border-color-primary border-2 bg-[#fae3da] focus:outline-none ' type='number' placeholder='Phone'></input>

                            <select className='py-4 rounded-2xl border-2 p-2 border-color-primary focus:outline-none bg-[rgb(250,227,218)] text-[#8d8d8d]' >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Others">Others</option>
                               
                            </select>

                            <input className='h-10  text-1xl py-7 rounded-2xl p-4 border-color-primary border-2 bg-[#fae3da] focus:outline-none text-[#8d8d8d]' type='Date' placeholder='Date'></input>




                            <select className='py-4 rounded-2xl border-2 p-2 border-color-primary focus:outline-none bg-[rgb(250,227,218)] text-[#8d8d8d]' >
                                <option value="Department">Department</option>
                                <option value="Pysiotherapy">Pysiotherapy</option>
                                <option value="Physical Helth">Physical Helth</option>
                                <option value="Treatments">Treatments</option>
                            </select>


                        </div>

                        <div className=' py-6  '>
                            <textarea placeholder='Write Comments' className='bg-[#fae3da]  border-color-primary border-2 text-sm rounded-lg  w-full h-40 p-3 focus:outline-none'></textarea>

                            <button className=' w-[100%] py-3 bg-color-primary text-white rounded-xl mt-4 hover:text-color-primary  hover:bg-white hover:border border-color-primary duration-200 transform ease-out uppercase font-medium'>Submit Now </button>
                        </div>


                    </form>
                </div>
            </div>

        </div>

    
    )
}

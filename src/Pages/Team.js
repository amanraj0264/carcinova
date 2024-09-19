import React from 'react'

function Team() {
  return (
    <div>
         <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-7 px-6 py-10 '>
            {data.map((d) => (

                <div className='   group hover:bg-color-primary hover:rounded-2xl hover:border-0 hover:box-content'>
                    <div className=' rounded'>
                        <img className='w-full rounded-t-2xl ' src={d.img} alt='Doctor-Team'></img>
                    </div>

                    <div className='space-y-5 border-2 border-color-primary rounded-b-2xl border-t-0'>
                        <h1 className='font-bold text-center pt-5  font-playfair text-color-heading  group-hover:text-black'>{d.name}</h1>
                       <h3 className='text-center text-color-primary  group-hover:text-white pb-5'>Designation</h3>
                    </div>
                </div>


            ))}

            
        </div>
    </div>
  )
}

const data = [
    {
        img: "/Photo/d1.jpg",
        name:"DR. KSHITISH CHANDRA MISHRA",


    },
    {
        img: "/Photo/d2.jpg",
        name:"DR. KSHITISH CHANDRA MISHRA",

    },
    {
        img: "/Photo/d3.jpg",
        name:"DR. SIDDHARTH PANDITRAY",

    },
    {
        img: "/Photo/d4.jpg",
        name:"DR. SAMIR RANJAN MOHANTA",

    },

]

export {Team};
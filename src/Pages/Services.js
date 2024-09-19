import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Services() {
    return (

        useEffect(() => {
            AOS.init({
                duration: 1000, // values from 0 to 3000, with step 50ms
                easing: 'ease', // default easing for AOS animations
                once: false, // whether animation should happen only once - while scrolling down
            });
        }, []),

        <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-7 px-6 pt-10 'data-aos="fade-up">
            {data.map((d) => (

                <div className=' shadow border-b-8 border-color-primary radius rounded-b-lg hover:scale-105 ease-in-out duration-300 hover:text-color-heading'>
                    <div className='overflow-hidden rounded-t-lg'>
                        <img className='w-full rounded-t-lg hover:scale-125 ease-in-out duration-300 ' src={d.img} alt='doctor'></img>
                    </div>

                    <div className=''>
                        <h1 className='font-medium  py-5 font-playfair text-xl'>{d.titel}</h1>
                        <button className='btn mb-8'>Read More</button>
                    </div>
                </div>


            ))}


        </div>
    );
}


const data = [
    {
        img: "/Photo/service-1.jpg",
        titel: "Chemotherapy",


    },
    {
        img: "/Photo/service-2.jpg",
        titel: "Radiation",
        
    },
    {
        img: "/Photo/service-3.jpg",
        titel: "Pathology",

    },
    {
        img: "/Photo/service-4.jpg",
        titel: "Clinical Trials",

    },

]

export { Services };
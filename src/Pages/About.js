import aboutimg from './image/about-1.jpg';
import aboutimg2 from './image/carousel-2.jpg';

export default function About() {
  return (
    <div className='max-w-[1320px] mx-auto grid md:grid-cols-2  px-16 py-20'>

            <div className=' flex justify-center items-center relative   md:w-5/6  bg-red-500'data-aos="fade-right">
                <h5 className='absolute font-bold  text-color-primary text-xl -rotate-90 -left-44 top-36 lg:tracking-[.25em] tracking-[.20em] lg:pl-0 pl-6 z-50'>15 years experience</h5>

                <img src={aboutimg} alt='doctor-patient' className='w-full h-full'></img>

                <img src={aboutimg2} alt='doctor-pati' className='rounded-full w-[250px] h-[250px] absolute -bottom-10 -left-10 border-8 '></img>

            </div>





            <div className='py-20'data-aos="fade-left">
                <h2 className=' font-playfair font-medium uppercase text-2xl text-color-primary'>About Us</h2>
                <h1 className='font-playfair text-3xl text-black font-medium'>Welcome to Carcinova: Odisha's Newest Cancer Care Hospital</h1>
                <div className='space-y-5'>
                    <p className='z-50 text-color-body pt-2'>
                        Carcinova was founded in May 2020 by a handful group of highly experienced oncologists and doctors from Odisha, who closely work with patients in this part of the world and understand the challenges they go through. Completely doctor-owned, the hospital shares no corporate association helping in keeping the patient's interest paramount. The vision is to bring in specialised world-class Cancer treatment affordable and close to home.


                    </p>

                    <p className='text-color-body'>We are proud to introduce HALCYON Radiotherapy facility for the first time in Odisha and Eastern India. It is the most effective, safe and non-toxic cancer treatment available, and will make an impact on the way a patient is managed.</p>

                    <p className='text-color-body'>We aim to set a new benchmark in cancer care through consistent research and development. We add value with our ability to offer all cancer treatment modalities under one roof. Treatment decisions are taken under a specialised team of doctors and renowned oncologists to achieve the best possible results.</p>
                </div>

            </div>










        </div>
  )
}

export {About};

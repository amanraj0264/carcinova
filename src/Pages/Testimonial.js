

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Testimonial() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (

    

    <Slider {...settings}>
      {data.map((d) => (

        <div className=' ' id='bg-testimoniall '>
          <div className='testimonial1 px-6 bg-color-primary opacity-90' >
            <div className='max-w-[1320px] mx-auto text-center pt-20 px-6'>
              <div className=' flex justify-center items-center '>

                <div className='space-y-1 rotate-180'>
                  <div className='bg-white h-[2px] w-24 rounded'></div>
                  <div className='bg-white h-[2px] w-12 rounded'></div>
                </div>



                <span className='px-2 Playfiar uppercase font-medium text-2xl text-white font-playfair'>Testimonial</span>

                <div className='space-y-1 '>
                  <div className='bg-white h-[2px] w-12 rounded'></div>
                  <div className='bg-white h-[2px] w-24 rounded'></div>
                </div>

              </div>
              <h1 className='text-6xl font-medium text-center py-5 font-playfair '>What Clients are Say</h1>

            </div>
            <div className='flex justify-center  items-center'>
              <img src={d.img} className='w-24 h-24 rounded-full border-2 ' alt="icon"></img>

            </div>


            <div className='max-w-[1320px] mx-auto  py-6'>

              

              <p className='px-8 text-white text-[20px] text-center'> Carcinova's dedicated team and state-of-the-art facilities made a significant difference in my recovery. The doctors explained everything clearly, and the nurses were always supportive. I felt safe and well-cared for throughout my treatment. Highly recommend Carcinova for their excellent care.
              </p>


            </div>
            
            <div className='text-center py-6'>
              <span className=''>Aisha Behera</span>


            </div>
          
          </div>


        </div>
      ))}

    </Slider>

  )
}


const data = [
  {
    img: "/Photo/i.jpg",


  },
  {
    img: "/Photo/i.jpg",


  },
  {
    img: "/Photo/i.jpg",


  },


]

export { Testimonial };


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Bannerslider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <div>




            <Slider {...settings}>
                {data.map((d) => (

                    <div className='outer '>
                        <img src={d.img} alt="Banner"></img>

                        <div className='inner flex text-center  space-y-4'>
                            <div className='revative '>
                                <div className='banner-text text-white md:w-3/4 w-full'>
                                    <h5 className='font-playfair text-2xl tracking-widest'>Carcinova</h5>
                                    <h1 className=' md:text-7xl text-4xl font-playfair md:py-6 py-2 font-medium'>Best Cancer Hospital</h1>
                                    <p className="md:py-6 py-2 text-xl">Your Pather in the Fight Against Cancer</p>
                                    <button className='btn'>Book Appointment</button>
                                </div>
                            </div>
                        </div>


                    </div>


                ))}

            </Slider>
        </div>
    )
}

const data = [
    {
        img: "/Photo/carousel-2.jpg",


    },
    {
        img: "/Photo/carousel-2.jpg",


    },
    {
        img: "/Photo/carousel-2.jpg",


    },


]

export { Bannerslider };
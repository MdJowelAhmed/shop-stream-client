
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className=' bg-[#F4F3F0] p-8 md:h-[600px] rounded-3xl' >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                 {/* <SwiperSlide>Slide 2</SwiperSlide> */}

                 <SwiperSlide>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='flex-1 text-center mt-16 space-y-4 flex flex-col items-center justify-center'>
                            <h2 className='text-5xl text-blue-400 font-semibold'>Would you like Tourist??For You</h2>
                            <h2 className='text-4xl text-amber-600 font-semibold'> Best Sea Beach Saint martin</h2>
                            <p className=''>Saint Martin, an island in the Caribbean Sea, boasts some of the most picturesque and pristine beaches in the world. Its coastline is adorned with soft white sands gently lapped by crystal-clear .</p>
                            <button className='btn btn-success my-10'>Explore More</button>

                        </div>
                        <div className='flex-1'>
                            <img className='w-full h-[500px] rounded-3xl' src="https://www.shutterstock.com/image-photo/tropical-st-martin-beach-sand-600nw-1751509040.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

               
                 {/* <SwiperSlide>Slide 3</SwiperSlide> */}

                 <SwiperSlide>
                    <div className='flex gap-5 flex-col md:flex-row'>
                        <div className='flex-1 text-center mt-16 space-y-4 flex flex-col items-center justify-center'>
                            <h2 className='text-5xl text-blue-400 font-semibold'>Would you like Tourist??For You</h2>
                            <h2 className='text-4xl text-amber-600 font-semibold'>A Beautyfull Natural Rangamati </h2>
                            <p className='text-sm'>Rangamati, a scenic district in southeastern Bangladesh, is dotted with captivating tourist spots that showcase the region's natural beauty and cultural heritage. Among its highlights is the breathtaking Kaptai Lake, </p>
                            <button className='btn btn-success my-10'>Explore More</button>

                        </div>
                        <div className='flex-1'>
                            <img className='w-full h-[500px] rounded-3xl' src="https://t4.ftcdn.net/jpg/03/36/71/29/360_F_336712931_9oC9QXONCoXpnoF5Us34GfSCvy5vWZ6W.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

                {/* <SwiperSlide>Slide 1</SwiperSlide> */}
                <SwiperSlide>
                    <div className='flex gap-5 flex-col md:flex-row'>
                        <div className='flex-1 text-center mt-16 space-y-4 flex flex-col items-center justify-center'>
                            <h2 className='text-5xl text-blue-400 font-semibold'>Would you like Tourist??For You</h2>
                            <h2 className='text-4xl text-amber-600 font-semibold'>This is Cox's Bazar Sea Beach </h2>
                            <p className='text-sm'>Cox's Bazar, situated along the southeastern coast of Bangladesh, is home to the world's longest natural sea beach, clear blue waters, and serene ambiance. Visitors to Cox's Bazar can indulge in a range of activities, from relaxing </p>
                            <button className='btn btn-success my-10'>Explore More</button>

                        </div>
                        <div className='flex-1'>
                            <img className='w-full h-[500px] rounded-3xl' src="https://img.freepik.com/free-photo/look-from-turquoise-water-along-golden-beach-somewhere-dominican-republic_1304-5312.jpg?t=st=1714070224~exp=1714073824~hmac=2f6bd87d49a8880ad962f695fb292ff715bf1b51a3790dc4b3a84c5b6c9378c5&w=740" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
               
                {/* <SwiperSlide>Slide 4</SwiperSlide> */}
                <SwiperSlide>
                    <div className='flex gap-5 flex-col md:flex-row'>
                        <div className='flex-1 text-center mt-16 space-y-4 flex flex-col items-center justify-center'>
                            <h2 className='text-5xl text-blue-400 font-semibold'>Would you like Tourist?? For You</h2>
                            <h2 className='text-4xl text-amber-600 font-semibold'>This is Bangkok </h2>
                            <p className='text-sm '>Bangkok, the vibrant capital of Thailand, is a city where ancient traditions blend seamlessly with modernity. Renowned for its bustling street life, ornate shrines, and vibrant markets.is a city where ancient</p>
                            <button className='btn btn-success my-10'>Explore More</button>

                        </div>
                        <div className='flex-1'>
                            <img className='w-full h-[500px] rounded-3xl' src="https://img.freepik.com/free-photo/wat-arun-temple-twilight-bangkok-thailand_335224-772.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
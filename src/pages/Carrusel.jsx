import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation} from 'swiper/modules';

export default function Carrusel() {
    return (
        <>
            <div className="w-full max-w-2xl mx-auto">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    slidesPerView={1}
                    spaceBetween={10}
                    centeredSlides={true}
                    className="rounded-2xl"
                >
                <SwiperSlide>
                    <img
                        src="/Carrusel/1.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/2.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/3.png"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/4.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/5.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                        />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/6.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/7.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                        />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/8.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/9.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/10.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/11.jpeg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/12.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/13.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/14.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/15.png"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/16.jpeg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/17.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/18.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/19.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/20.png"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/21.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/22.png"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/23.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/24.jpg"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/Carrusel/25.png"
                        alt="Slide 1"
                        className="w-full h-auto object-cover rounded-2xl"
                    />
                </SwiperSlide>
            </Swiper>

                <div className="absolute -bottom-12 left-1/2 flex gap-6 -translate-x-1/2
                sm:gap-8 md:gap-10">
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </>
    );
}
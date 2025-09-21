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

                    {/* imagenes.map((_, index) => (

                    ))*/}

                    {Array.from({ length: 28 }).map((_, index) => (
                        <SwiperSlide>
                            <img
                                src={`/Carrusel/${index + 1}.jpg`}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-auto object-cover rounded-2xl"
                                onError={(e) => {
                                    e.currentTarget.onerror = null; // para evitar bucles infinitos
                                    e.currentTarget.src = `/Carrusel/${index + 1}.png`;
                                }}
                            />
                        </SwiperSlide>
                        ))}
            </Swiper>
        </div>
        </>
    );
}
import './Testimonials.css'
import { testimonial } from "./Constant";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id='Testimonial' className='test'>
      <h5>Rewiew from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
           modules={[Pagination]}
           spaceBetween={40}
           slidesPerView={1}
           pagination={{ clickable: true }}>
          {
            testimonial.map(({ avatar, name, review }, idx) => {
              return (
                <SwiperSlide key={idx} className="testimonial">
                  <div className="client__avatar">
                    <img src={avatar} alt={name} />
                  </div>
                  <h5 className="client__name">{name}</h5>
                  <small className="client__review">{review}</small>
                </SwiperSlide>

              )
            })
          }
        </Swiper>
    </section>
  )
}

export default Testimonials
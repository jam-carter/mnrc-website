// components/PhotoGallery.tsx
"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import Image from 'next/image';
import styles from './photoGallery.module.css';

const images = [
  "/images/MainHall/mnrcMainHall1.jpg",
  "/images/Bowls/mnrcBowling1.jpg",
  "/images/Bowls/mnrcBowling2.jpg",
  "/images/Soccer/mnrcSoccer1.jpg",
  "/images/SportsBar/mnrcSportsBar1.jpg",
  "/images/Tennis/mnrcTennis1.jpg",
];

const PhotoGallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={3}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className={styles.imageContainer}>
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 
                       (max-width: 1200px) 50vw, 
                       33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoGallery;

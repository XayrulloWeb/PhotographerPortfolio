import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import gsap from "gsap";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
    "https://imgpanda.com/upload/ib/QgDfPHowhf.jpg",
    "https://imgpanda.com/upload/ib/sq4ALbEhIS.jpg",
    "https://imgpanda.com/upload/ib/I4qmZchHEP.jpg",
    "https://imgpanda.com/upload/ib/3MT0ktDOF4.jpg",
    "https://imgpanda.com/upload/ib/ciuzppjWeC.jpg",
    "https://imgpanda.com/upload/ib/P4k8H9khvt.jpg",
];

function Videos() {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slides = sliderRef.current.querySelectorAll(".swiper-slide img");

        slides.forEach((slide) => {
            gsap.fromTo(
                slide,
                { opacity: 0, scale: 1.2 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: slide,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <section className="creative-photography--slider theme1">
            <div className="container">

            </div>

            <Swiper
                ref={sliderRef}
                modules={[Autoplay, Pagination]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="swiper-container"
            >
                {slides.map((image, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                        <div className="photography-slider--item">
                            <div className="photography-slider--layer">
                                <img
                                    src="https://imgpanda.com/upload/ib/QTBKjzDqxD.png"
                                    alt="background"
                                />
                            </div>
                            <div className="photography-slider--content">
                                <div className="photography-slider--image">
                                    <img src={image} alt="slide" />
                                    <div className="photography-slider--inner">
                                        <div className="photography-heading">
                                            <div className="photography-item--inner">
                                                <h1 className="photography-item--title">
                                                    Desert <br />
                                                    <span>Loneliness</span>
                                                </h1>
                                                <h1 className="photography-item--title-outline">
                                                    Folio
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/*<div className="creative-photography--sidebar">*/}
            {/*    <div className="social-box">*/}
            {/*        <ul>*/}
            {/*            <li>*/}
            {/*                <a href="#">FB</a>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <a href="#">IG</a>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <a href="#">YT</a>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <a href="#">DR</a>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    );
}

export default Videos;

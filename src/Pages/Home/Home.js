import React, {useEffect, useRef} from 'react';
import img3 from "../../assets/Images/photo3.jpg";
import img4 from "../../assets/Images/photo4.jpeg";
import img2 from "../../assets/Images/photo2.jpg";
import img1 from "../../assets/Images/photo1.jpg";
import gsap from "gsap";

function Home(props) {
    const imgGroupRef = useRef(null);
    const photographerRef = useRef(null);
    const textRef = useRef(null);
    const bottomTextRef = useRef(null);


    useEffect(() => {
        const tl = gsap.timeline();

        if (textRef.current) {
            tl.from(textRef.current.querySelectorAll("span"), {
                x: -20,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
            });
        }

        if (bottomTextRef.current) {
            tl.from(bottomTextRef.current, {
                opacity: 0,
                y: 20,
                duration: 1,
            });
        }



        const imgElements = imgGroupRef.current?.querySelectorAll("img");
        const photographer = photographerRef.current;

        if (!imgElements || !photographer) return;

        tl.from(imgElements, {
            opacity: 0,
            x: 1100,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out"
        }, "-=0.8") // Запускаем раньше, чем завершится предыдущая анимация
            .to(
                imgElements,
                {
                    x: 1100,
                    duration: 1,
                    margin: "0 -140px 0",
                    stagger: 0.1,
                    rotate: 15,
                    opacity: 1,
                    ease: "power2.out"
                },
                "-=0.5" // Начинаем раньше, чем закончится предыдущее
            );


        const handleMouseOver = () => {
            gsap.to(imgElements, {
                x: -100,
                duration: 1,
                margin: "0 10px 0",
                stagger: 0.14,
                rotate: 0,
                opacity: 1,
            });
        };

        const handleMouseOut = () => {
            gsap.to(imgElements, {
                x: 1100,
                duration: 1,
                margin: "0 -140px 0",
                stagger: 0.14,
                rotate: 15,
                opacity: 1,
            });
        };

        photographer.addEventListener("mouseover", handleMouseOver);
        photographer.addEventListener("mouseout", handleMouseOut);

        return () => {
            photographer.removeEventListener("mouseover", handleMouseOver);
            photographer.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);
    return (
        <>
            <section className="content">
                <div className="text" ref={textRef}>
                    <h1>
                        <span>Hello, I'm</span> <br/>
                        <span>Diyorbek</span> <br/>
                        <span ref={photographerRef} className="photographer">Mobilographer</span>
                    </h1>
                </div>

                <div className="img_group" ref={imgGroupRef}>
                    <div className="img_group_inner">
                        <img src={img3} alt="photo 1"/>
                        <img src={img4} alt="photo 2"/>
                        <img src={img2} alt="photo 3"/>
                        <img src={img1} alt="photo 4"/>
                    </div>
                </div>

                <div className="bottom_text" ref={bottomTextRef}>
                    <h5>XayrulloWeb for Photographer User, FrontEnd Developer</h5>
                </div>
            </section>
        </>
    );
}

export default Home;
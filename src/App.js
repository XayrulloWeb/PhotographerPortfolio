import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./assets/Style/style.css";
import img1 from "./assets/Images/photo1.jpg";
import img2 from "./assets/Images/photo2.jpg";
import img3 from "./assets/Images/photo3.jpg";
import img4 from "./assets/Images/photo4.jpeg";

function App() {
  const textRef = useRef(null);
  const bottomTextRef = useRef(null);
  const imagesRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Анимация заголовка
    if (textRef.current) {
      tl.from(textRef.current.querySelectorAll("span"), {
        x: -20,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
    }

    // Анимация нижнего текста
    if (bottomTextRef.current) {
      tl.from(bottomTextRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
      });
    }

    // Анимация логотипа
    if (logoRef.current) {
      tl.from(logoRef.current, {
        y: -20,
        opacity: 0,
        duration: 1,
      });
    }

    // Анимация навигации
    if (navRef.current) {
      tl.from(navRef.current.querySelectorAll("li"), {
        y: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      });
    }

    // Анимация изображений
    if (imagesRef.current) {
      const images = imagesRef.current.querySelectorAll("img");

      tl.from(images, {
        opacity: 0,
        x: 1100,
        duration: 1,
        stagger: 0.12,
      }).to(images, {
        x: 1100, // Вместо margin
        duration: 1,
        margin: '0 -140px 0',
        stagger: 0.14, // Уменьшаем шаг
        rotate: 15,
        opacity: 1,
      }, "-=0.5");

    }
  }, []);

  return (
      <div className="App">
        <header>
          <div className="logo">
            <a ref={logoRef} href="#">LOGO</a>
          </div>
          <nav>
            <ul ref={navRef}>
              <li><a href="#">Photos</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
        </header>

        <section className="content">
          <div className="text" ref={textRef}>
            <h1>
              <span>Hello, I'm</span> <br />
              <span>A Photographer</span> <br />
              <span className="photographer">Photographer</span>
            </h1>
          </div>

          <div className="img_group" ref={imagesRef}>
            <div className="img_group_inner">
              <img src={img1} alt="photo 1" />
              <img src={img2} alt="photo 2" />
              <img src={img3} alt="photo 3" />
              <img src={img4} alt="photo 4" />
            </div>
          </div>

          <div className="bottom_text" ref={bottomTextRef}>
            <h5>XayrulloWeb for Photographer User, FrontEnd Developer</h5>
          </div>
        </section>
      </div>
  );
}

export default App;

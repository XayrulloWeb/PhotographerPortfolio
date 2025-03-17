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

  useEffect(() => {
    if (textRef.current) {
      gsap.from(textRef.current.querySelectorAll("span"), {
        x: -20,
        duration: 1,
        opacity: 0,
        stagger: 0.4,
      });
    }

    if (bottomTextRef.current) {
      gsap.from(bottomTextRef.current, {
        opacity: 0,
        y: 20,
        duration: 1.5,
      });
    }

    if (imagesRef.current) {
      const images = imagesRef.current.querySelectorAll(".img_group img");

      gsap.from(images, {
        opacity: 0,
        x: 1100,
        duration: 1,
        stagger: 0.14,
      });

      gsap.to(images, {
        opacity: 1,
        x: 0, // Теперь картинки приходят в центр (0, а не снова 1100)
        duration: 1,
        stagger: 0.14,
        rotate: 15, // Добавляем поворот
      }, "-=0.8"); // Анимация начинается немного раньше
    }
  }, []);


  return (
    <div className="App">
      <header>
        <div className="logo">
          <a href="#">LOGO</a>
        </div>
        <nav>
          <ul>
            <li><a href="#">Photos</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact US</a></li>
          </ul>
        </nav>
      </header>

      <section className="content">
        <div className="text" ref={textRef}>
          <h1>
            <span>Hello, I'm</span> <br />
            <span>A Photographer</span> <br />
            <span className="photographer"> Photographer</span>
          </h1>
        </div>
        
        <div className="img_group">
          <div className="img_group_inner">
            <img src={img1} alt="photo" />
            <img src={img2} alt="photo" />
            <img src={img3} alt="photo" />
            <img src={img4} alt="photo" />
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

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

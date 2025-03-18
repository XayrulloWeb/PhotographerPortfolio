import React, { useEffect, useRef } from "react";
import {Link} from "react-router-dom";
import gsap from "gsap";

function Navbar() {
    const logoRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        if (logoRef.current) {
            tl.from(logoRef.current, {
                y: -20,
                opacity: 0,
                duration: 1,
            });
        }

        if (navRef.current) {
            tl.from(navRef.current.querySelectorAll("li"), {
                y: -20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
            });
        }
    }, []);

    return (
        <header className="navbar">
            <div className="logo" ref={logoRef}>
                <Link to='/'  >LOGO</Link>
            </div>
            <nav className="nav">
                <ul className="nav-list" ref={navRef}>
                    <li className="nav-item"><Link to="/videos">Videos</Link></li>
                    <li className="nav-item"><Link to="#">About</Link></li>
                    <li className="nav-item"><Link to="#">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;

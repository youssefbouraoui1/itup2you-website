import React from "react";
import { Link } from "react-scroll";
import { useState,useEffect } from "react";
import styles from "../styles";

const Navbar = () => {

    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <nav className={`navbar navbar-expand-lg align-items-center
            `} style={{ backgroundColor: scrolled ? '#050816' : 'transparent',zIndex:20,position:'fixed',top:0,width:'100%',paddingBottom:'20px'}}>
            <div style={{marginLeft:"15px"}} >
                <Link to="#" style={{textDecoration: 'none',color:"white",cursor:'pointer'}} className="fw-bold fs-3">ITUP2YOU</Link>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{backgroundImage: "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 30 30%22 fill=%22white%22><path stroke=%22rgba(255, 255, 255, 1)%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-miterlimit=%2210%22 d=%22M4 7h22M4 15h22M4 23h22%22/></svg>')"}}></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav" style={{marginRight:'20px'}}>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="hero" className="nav-link" style={{color:'white',cursor:'pointer'}}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="formations" className="nav-link" style={{color:'white',cursor:'pointer'}}>Courses</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" className="nav-link" style={{color:'white',cursor:'pointer'}}>Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link" style={{color:'white',cursor:'pointer'}}>About us</Link>
                        </li>
                    </ul>
                </div>
        </nav>
    );
};

export default Navbar;

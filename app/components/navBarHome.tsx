// components/NavWithArrow.tsx
"use client"; // This directive ensures this component is treated as a Client Component

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./navBarHome.module.css"; // Create a new CSS module if necessary


const NavBar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, []);


  return (
    <div className={`${styles.navContainer} ${isScrolled ? styles.scrolledNavbar : styles.notScrolledNavbar}`}>  
        <Link href="/" className={styles.navImage}>
          <Image 
            src="/images/logos/logo1/mnrcLogoNoBackround.png" 
            alt="Logo" 
            width={500} 
            height={400}
          />
        </Link>
        
        <div className={styles.navTitle}>
          <h1>Home Page</h1>
        </div>

        <div className={styles.nav}>
          <Link 
            href="/affiliates"
            onMouseEnter={() => console.log("hovered")}
          >
            Affiliates
          </Link>
          <Link href="/contact">Contact</Link>
          <Link href="/history">History</Link>
          <Link href="/management">Management</Link>
          <Link href="/membership">Membership</Link>
        </div>
    </div>
  );
};

export default NavBar;

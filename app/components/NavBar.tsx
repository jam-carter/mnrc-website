"use client"; // This directive ensures this component is treated as a Client Component

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import styles from "./navBar.module.css"; // Create a new CSS module if necessary


const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => { 
    console.log("useEffect is called");

    const handleScroll = () => {
      console.log("Handle scroll called");
      console.log("scrolled position", window.scrollY);
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    console.log("Event listener added");
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log("event listender removed");
    };
  }, []);

  const pageTitle = () => {
    switch(pathname) {
      case "/affiliates": 
        return "Affiliates";
      case "/contact": 
        return "Contact";
      case "/events": 
        return "Events";
      case "/history": 
        return "History";
      case "/management": 
        return "Management";
      case "/membership": 
        return "Membership";
      case "/rooms": 
        return "Rooms";
      default: 
        return "Home";
    }
  }

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
          <h1>{pageTitle()}</h1>
        </div>

        <div className={styles.nav}>
          <Link 
            href="/affiliates"
            onMouseEnter={() => console.log("hovered")}
          >
            Affiliates
          </Link>
          <Link href="/contact">Contact</Link>
          <Link href="/events">Events</Link>
          <Link href="/history">History</Link>
          <Link href="/management">Management</Link>
          <Link href="/membership">Membership</Link>
          <Link href="/rooms">Rooms</Link>
        </div>
    </div>
  );
};

export default NavBar;

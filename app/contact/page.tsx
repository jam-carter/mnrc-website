'use client'
import styles from "./contact.module.css"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Image from "next/image"
import ContactForm from "../components/contactForm"



export default function Contact() {
  return (
    <div className={styles.container}>
        
      <div className = {styles.backgroundImage}>
        <Image
          src="/images/placeholderBowls.jpg"
          alt="Background Image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <NavBar />
        
      <div className={styles.whiteBackround}>
        <div className={styles.content}>
          <div className ={styles.leftContact}>
            <div className ={styles.leftContactText}>
             <h1>You will find us at...</h1>
             <h2>Rear of the Hawaiian Noranda Shopping Centre</h2>
             <br />
             <h2>Morley Noranda Recreation Club Inc.</h2>
             <h2>85 McGilvray Ave</h2>
             <h2>Noranda WA 6062</h2>
             <br />
             <h2>Phone: (08) 9276 8312</h2>
             <h2>Email: secretary@mnrc.com.au // admin@mnrc.com.au</h2>
             <br />
             <h2>
               If you have any questions please call or come in and speak to Lynda or Janet
             </h2>
            </div>
            <div className={styles.contactImages}>
              <Image src="/images/janet.jpg" alt="Photo of the Secretary" width={300} height={200} />
              <Image src="/images/janet.jpg" alt="Photo of the Secretary" width={300} height={200} />
            </div>
              
          </div>

          <div className={styles.rightContact}>
            <ContactForm />
          </div>

        </div>

        <Footer />

      </div>

    </div>
    )
  }
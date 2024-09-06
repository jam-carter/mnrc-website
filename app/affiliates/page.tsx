import styles from "./affiliates.module.css"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Image from "next/image"
import AffiliateCard from "../components/affiliateCard"


export default function membership() {
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
            <p>
              MNRC is your local Community Recreation Club and is home to Morley
              Bowling Club, Noranda Tennis Club, Morley Dart Club, Noranda City
              Football Club, and Brumbies Country Music Club.
            </p>  
          </div>

          <AffiliateCard 
            title=""
            description=" the tennis club"
            imageSrc="/images/Affiliates/MNRC_Affiliates_AmberJade_1.png"
            altText="Tennis"
          />

          <AffiliateCard 
            title="Circle Work | Find your inner self !"
            description="Run by Registrar of MNRC, Chris Newall. Provides health benefits such as improved balance and coordination, strength and edurance. Offers classes with Tai Chi, Slow Yoga, High Performance Aging, I Liq Chuan "
            imageSrc="/images/Affiliates/MNRC_Affiliates_CircleWork_1.png"
            altText="Tennis"
          />

          <AffiliateCard 
            title="Discount Framing"
            description=" the tennis club"
            imageSrc="/images/Affiliates/MNRC_Affiliates_DiscountFraming_1.jpg"
            altText="Tennis"
          />

          <AffiliateCard 
            title="Noranda Tennis Club"
            description=" the tennis club"
            imageSrc="/images/Affiliates/MNRC_Affiliates_Donatos_1.jpg"
            altText="Tennis"
          />

          <AffiliateCard 
            title="Noranda Tennis Club"
            description=" the tennis club"
            imageSrc="/images/Affiliates/MNRC_Affiliates_JohnPhotography_1.jpg"
            altText="Tennis"
          />

          <AffiliateCard 
            title="Noranda Tennis Club"
            description=" the tennis club"
            imageSrc="/images/Affiliates/MNRC_Affiliates_MangoesHairdressing_1.jpg"
            altText="Tennis"
          />

          <AffiliateCard 
            title="Noranda Tennis Club"
            description=" the tennis club"
            imageSrc="/images/Affiliates/MNRC_Affiliates_MetroHotel_1.jpg"
            altText="Tennis"
          />

          <AffiliateCard 
            title="Noranda Tennis Club"
            description=" the tennis club"
            imageSrc="/images/Affiliates/MNRC_Affiliates_Elysium_1.jpg"
            altText="Tennis"
          />

        </div>

        <Footer />

      </div>
    )
  }
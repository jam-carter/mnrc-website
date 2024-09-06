// pages/HomePage.tsx
import Image from "next/image";
import styles from "./history.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function HomePage() {
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
          <div className={styles.historyBlock}>
            <div className={styles.textBlock}>
              <p>
                Founded in 1976, the Morley Noranda Recreation Club began its journey as the Morley Bowling Club, however, the idea of establishing a bowling club in Morley was first conceived a decade earlier at the Bassendean Bowling Club. Over a few beers, four local bowlers, envisioned creating a place closer to home where residents could enjoy a game of bowls and a social drink. The old Morley Park Hotel (now Dan Murphy’s bottle shop) became the hub for these discussions, attracting more enthusiasts and ultimately giving birth to the concept.
              </p>
            </div>

            <div className={styles.imageBlock}>
              <Image 
                src="/images/placeholderHistory.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="contain"   
              />
            </div>
          </div>

          <div className={styles.historyBlock}>
            <div className={styles.textBlock}>
              <p>
                In July 1976, with the collaboration of the Shire of Bayswater, three local councillors, and 31 community members, a unanimous decision was made to establish a sporting and recreation club in Morley under the Bowling Club annex. By September 1976, the club was officially named the Morley Districts Recreational Club, which is now known as the Morley Noranda Recreation Club.              
              </p>
            </div>

            <div className={styles.imageBlock}>
              <Image 
                src="/images/placeholderHistory.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="contain"   
              />
            </div>
          </div>

          <div className={styles.historyBlock}>
            <div className={styles.textBlock}>
              <p>
                In mid-January 1979, the bowling greens were officially opened, and competitions began in the 1979/80 season, marking the start of a long tradition that continues today. Around this time, a group of dedicated volunteers constructed the original bar and clubrooms, affectionately known as the little house on the prairie. This modest, low-roofed building stood in the middle of an open recreation space.              
              </p>
            </div>

            <div className={styles.imageBlock}>
              <Image 
                src="/images/placeholderHistory.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="contain"   
              />
            </div>
          </div>

          <div className={styles.historyBlock}>
            <div className={styles.textBlock}>
              <p>
                By 1981, the club had outgrown its original facility, prompting the construction of a new, larger building. This facility, which remains in use today, was formally opened by Shire President Cr. N.E. Davis on Sunday, January 30, 1983. Fast forward to now, and the club has undergone numerous renovations to accommodate its growing membership. Today, the Morley Noranda Recreation Club is home to various sporting codes and community groups, including the Noranda City Football Club, Morley Tennis Club, Morley Darts Club, BrumbiesCountry Music Club, Lions of Noranda, Morley Ladies and Men’s Probus groups, and many other local organizations.            
              </p>
            </div>

            <div className={styles.imageBlock}>
              <Image 
                src="/images/placeholderHistory.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="contain"   
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}

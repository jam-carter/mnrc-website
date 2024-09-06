// pages/HomePage.tsx
import Image from "next/image";
import styles from "./managment.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CommitteeMember from "../components/committeeGrid";

const committeeMembers = [
  { name: 'Mick Wainwright', title: 'President', imageUrl: '/images/management/placeholderMale.png' },
  { name: 'Danny Mayers', title: 'Vice President', imageUrl: '/images/management/placeholderMale.png' },
  { name: 'Janet Spellissy', title: 'Secretary', imageUrl: '/images/management/placeholderFemale.jpg' },
  { name: 'Gordon Slee', title: 'Treasurer', imageUrl: '/images/management/placeholderMale.png' },
  { name: 'Chris Newell', title: 'Registrar', imageUrl: '/images/management/placeholderMale.png' },
  { name: 'Jan Earle', title: 'Committee Member', imageUrl: '/images/management/placeholderFemale.jpg' },
  { name: 'Jackie Criddle', title: 'Committee Member', imageUrl: '/images/management/placeholderFemale.jpg' },
  { name: 'Kerry Godden', title: 'Committee Member', imageUrl: '/images/management/placeholderFemale.jpg' },
  { name: 'Stephanie Grey', title: 'Committee Member', imageUrl: '/images/management/placeholderFemale.jpg' },
  { name: 'Tony Luckcraft', title: 'Committee Member', imageUrl: '/images/management/placeholderMale.png' },
  { name: 'Maureen Liddington', title: 'Committee Member', imageUrl: '/images/management/placeholderFemale.jpg' },
]


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
          <div className={styles.managementIntroduction}>
            <p>
              Our Management Committee is composed of dedicated members who work tirelessly to ensure the smooth operation and ongoing success of the Morley Noranda Recreation Club. Each role within the committee, from the President to the regular committee members, plays a vital part in overseeing the clubs governance, maintaining its values, and driving future growth. 
            </p>

            <br />

            <p>
              Meet the individuals who lead our club and support its vibrant community :
            </p>

          </div>

          <div className = "grid grid-cols-2 gap-4">
            {committeeMembers.map((member) => (
              <CommitteeMember key={member.name} name={member.name} title={member.title} imageUrl={member.imageUrl} />
            ))}
          </div>

        </div>
      </div>

      <Footer />

    </div>
  );
}

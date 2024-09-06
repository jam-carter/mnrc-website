import styles from "./events.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Image from "next/image";
import EventCard from "../components/eventCard";

const Events: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}>
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

        <div className={styles.cardGrid}>
          <EventCard
            title="Happy Hour"
            description="Our exclusive Happy Hour every Tuesday from 4-5 PM, come down and enjoy your favorite drinks at special prices and unwind with friends"
            imageSrc="/images/MainHall/mnrcMainHall1.jpg"
            altText="Photo of the Main Hall"
          />

          <EventCard
            title="Brumbies Country Music Festival"
            description="Every Sunday from 3:00 PM to 6:30 PM you can experience live country music at its best, $15 entry for non-members"
            imageSrc="/images/MainHall/mnrcMainHall1.jpg"
            altText="Photo of the Main Hall"
          />

          <EventCard
            title="Jag the Joker"
            description="Join us every Friday for Jag the Joker! Members and their guests can win up to $2,000. Will you be the lucky one?"
            imageSrc="/images/MainHall/mnrcMainHall1.jpg"
            altText="Photo of the Main Hall"
          />

          <EventCard
            title="Friday Night Dinner"
            description="Indulge in our à la carte dinners every other Friday. Delicious meals, cozy ambiance—perfect for your Friday night."
            imageSrc="/images/MainHall/mnrcMainHall1.jpg"
            altText="Photo of the Main Hall"
          />

          <EventCard
            title="Bingo Night Tuesdays"
            description="Bingo Night on the third Tuesday of every month! Fun, prizes, and a chance to shout 'Bingo!' — join the excitement."
            imageSrc="/images/MainHall/mnrcMainHall1.jpg"
            altText="Photo of the Main Hall"
          />

          <EventCard
            title="Corperate Bowls"
            description="Every Wednesday, starting in February—Corporate Bowls! A six-week series of fun, friendly competition under the stars."
            imageSrc="/images/MainHall/mnrcMainHall1.jpg"
            altText="Photo of the Main Hall"
          />
        </div>

        <Footer />
        
      </div>
      
      
    </div>
  );
}

export default Events;

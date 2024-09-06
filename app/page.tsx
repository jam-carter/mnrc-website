// Colour Pallette: jet - #363537, 'white' - #fbfef9, crimson - #d62839
import Image from "next/image";
import styles from "./homePage.module.css";
import PhotoGallery from "./components/photoGallery";
import NavBarHome from "./components/navBarHome";
import InfoCard from "./components/infoCard";
import Footer from "./components/Footer";

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

      <NavBarHome />

      <div className={styles.whiteBackround}>

        <div className={styles.content}>
          <p>
            MNRC is your local Community Recreation Club and is home to Morley
            Bowling Club, Noranda Tennis Club, Morley Dart Club, Noranda City
            Football Club, and Brumbies Country Music Club.
          </p>

          <br />

          <p>
            Here at the recreation club, we support various local communities
            such as the Noranda and Morley Lions Club, Morley and Noranda Probus,
            Dianella Weight Watchers, and The Burgher Welfare League of WA Inc.
          </p>

          <br />

          <p>
            The Morley Noranda Recreation Club has a full-service bar that
            operates 7 days a week:
            <br />
            • Monday – Wednesday: 11.30am to 8.00pm
            <br />
            • Thursday – Sunday: 11.30am till Late
          </p>

          <br />

          <p>
            Our Sports Bar offers five sporting viewing opportunities,
            self-service TAB machines, Video Gaming Lottery Machines, and a
            relaxing environment with comfortable seating that opens onto the
            alfresco area overlooking the bowling greens.
          </p>

          <br />

          <p>
            As a community-oriented venue, we offer a little bit of something for
            everyone, ranging from events such as Tuesday night Bingo and
            Wednesday Corporate Bowls to Friday night meals every two weeks and a
            playground for the children to run and play in.
          </p>
        </div>

        <InfoCard
          title = "Functions"
          description = "We offer a variety of functions to suit all of your needs. Our club provides four different sized rooms for your events, meetings and gatherings of all sizes. Our function rooms are all fully equipped with all necessary equipment and facilities to meet your needs."
          imageSrc = "/images/MainHall/mnrcMainHall1.jpg"
          altText = "Photo of the Main Hall"
        />
      
        <InfoCard
          title = "Join Now !"
          description="Become a member of the MNRC today and enjoy exclusive benefits, events, and facilities. Our membership offers a great way to get involved with the local community and participate in a wide range of activities."
          imageSrc = "/images/MainHall/mnrcMainHall1.jpg"
          altText = "Photo of the Main Hall"
        />

        <InfoCard
          title = "Affiliates"
          description="MNRC proudly supports and collaborates with a variety of local clubs and organizations. Learn more about our affiliates and how we work together to build a stronger community."
          imageSrc = "/images/MainHall/mnrcMainHall1.jpg"
          altText = "Photo of the Main Hall"
        />

        <InfoCard
          title = "Events"
          description="Join us for a range of exciting events throughout the year. From sports tournaments and social gatherings to community festivals and more, there's always something happening at MNRC."
          imageSrc = "/images/MainHall/mnrcMainHall1.jpg"
          altText = "Photo of the Main Hall"
        />

        <InfoCard
          title = "Management"
          description="Meet the dedicated team behind the Morley Noranda Recreation Club. Our management team works tirelessly to ensure the smooth running of the club and the enjoyment of all our members."
          imageSrc = "/images/MainHall/mnrcMainHall1.jpg"
          altText = "Photo of the Main Hall"
        />

        <InfoCard
          title = "History"
          description="Discover the rich history of the Morley Noranda Recreation Club. From its humble beginnings to the vibrant community hub it is today, learn about the milestones and achievements that have shaped our club."
          imageSrc = "/images/MainHall/mnrcMainHall1.jpg"
          altText = "Photo of the Main Hall"
        />

        <PhotoGallery />

      </div>

    

      <Footer />
    
    </div>
  );
}

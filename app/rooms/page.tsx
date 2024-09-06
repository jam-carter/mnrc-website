import styles from "./rooms.module.css"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Image from "next/image"
import RoomCard  from "../components/roomCard"


export default function rooms() {
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
          <RoomCard 
            title="Main Hall"
            description="The Main Hall is here for your large scale functions, from sporting event windups to wedding receptions, our biggest function room is here to suit your needs."
            imageSrc="/images/MainHall/mnrcMainHall1.jpg"
            altText="Room image"
          />

          <RoomCard 
            title="The Snug"
            description="One of our two smaller function rooms, The Snug is perfect for a more private gathering or meeting. This room sits around 40 people comfortably and is perfect for smaller functions."
            imageSrc="/images/MainHall/mnrcMainHall1.jpg"
            altText="Room image"
          />

          <RoomCard 
            title="The Den"
            description="The second of our two smaller function rooms, The Den is more suited for a small to medium scale function, seating up to a maximum of 70 people comfortably. This room also comes with a fully functional kitchen and an al fresco area."
            imageSrc="/images/MainHall/mnrcMainHall1.jpg"
            altText="Room image"
          />

          <RoomCard 
            title="Al Fresco"
            description="Our Al Fresco area runs along all four main inside areas of the recreation centre, and is accessible from all doors leading into the bowls green. This area is perfect for an afternoon function that pairs perfectly with barefoot bowls! (Please contact the office for more information for specfics of booking this area)."
            imageSrc="/images/MainHall/mnrcMainHall1.jpg"
            altText="Room image"
          />

          <RoomCard 
            title="Meeting Room"
            description="The Meeting Room is our smallest function room, sits 12 people comfortably."
            imageSrc="/images/MainHall/mnrcMainHall1.jpg"
            altText="Room image"
          />

          <RoomCard 
            title="Kitchen"
            description=""
            imageSrc="/images/MainHall/mnrcMainHall1.jpg"
            altText="Room image"
         />

        </div>

      </div>

      <Footer />

    </div>
  )
}
import React from 'react';
import Image from 'next/image';
import styles from './eventCard.module.css';

const EventCard = ( { title , description , imageSrc, altText }:{title: string, description: string, imageSrc: string, altText: string }) => {  return (
    <div className={styles.card}>

      <div className={styles.eventCardText}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className={styles.eventCardImage}>
        <Image 
          src={imageSrc} 
          alt={altText} 
          fill
          style={({ objectFit: "cover" })}
        />
      </div>

    </div>
  );
};

export default EventCard;

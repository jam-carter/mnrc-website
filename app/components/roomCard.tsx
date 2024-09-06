import React from 'react';
import Image from 'next/image';
import styles from './roomCard.module.css';

const infoCard = ( { title , description , imageSrc, altText}:{title: string, description: string, imageSrc: string, altText: string }) => {  return (
    <div className={styles.card}>

      <div className={styles.infoCardText}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Enquire Now</button>
        </div>
      </div>

      <div className={styles.infoCardImage}>
        <Image 
          src={imageSrc} 
          alt={altText} 
          layout="fill" 
          objectFit="cover" 
        />
      </div>

    </div>
  );
};

export default infoCard;

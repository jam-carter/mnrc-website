import React from 'react';
import Image from 'next/image';
import styles from './affiliateCard.module.css';

const AffiliateCard = ( { title , description , imageSrc, altText}:{title: string, description: string, imageSrc: string, altText: string }) => {  return (
    <div className={styles.card}>

      <div className={styles.infoCardText}>
        <h2>{title}</h2>
        <p>{description}</p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>Function Pack</button>
          <button className={styles.secondaryButton}>Enquire Now</button>
        </div>
      </div>

      <div className={styles.infoCardImage}>
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

export default AffiliateCard;

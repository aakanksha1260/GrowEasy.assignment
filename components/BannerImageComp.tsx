"use client";

import React from 'react';
import styles from '../styles/BannerImageComp.module.css';

interface BannerImageCompProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  onEdit: (id: number) => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ id, title, description, cta, image, onEdit }) => {
  return (
    <div className={styles.banner}>
      <img src={image} alt={title} />
      <div className={styles.bannerContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{cta}</button>
      </div>
      <div className={styles.editIcon} onClick={() => onEdit(id)}>✏️</div>
    </div>
  );
};

export default BannerImageComp;

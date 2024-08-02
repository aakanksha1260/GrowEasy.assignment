"use client";

import React, { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';
import bannersData from '../data/banners.json';
import styles from '../styles/Home.module.css';

const HomePage: React.FC = () => {
  const [banners, setBanners] = useState(bannersData);
  const [currentBanner, setCurrentBanner] = useState<any>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEdit = (id: number) => {
    const banner = banners.find((b) => b.id === id);
    setCurrentBanner(banner);
    setIsEditOpen(true);
  };

  const handleSave = (updatedBanner: any) => {
    setBanners(banners.map((b) => (b.id === updatedBanner.id ? updatedBanner : b)));
  };

  return (
    <div className={styles.container}>
      {banners.map((banner) => (
        <BannerImageComp key={banner.id} {...banner} onEdit={handleEdit} />
      ))}
      {currentBanner && (
        <EditBannerTemplateBs
          open={isEditOpen}
          handleClose={() => setIsEditOpen(false)}
          banner={currentBanner}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default HomePage;

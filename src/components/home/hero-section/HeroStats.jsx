"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { heroStats } from "@/data/heroData";
import HeroStatCard from "./HeroStatCard";
import styles from "./heroStats.module.css";

const HeroStats = () => {
  const sliderRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const updateArrows = () => {
      const isSlider = window.innerWidth <= 991;
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      setCanPrev(isSlider && slider.scrollLeft > 2);
      setCanNext(isSlider && slider.scrollLeft < maxScroll - 2);
    };

    updateArrows();

    slider.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);

    return () => {
      slider.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const handleSlide = (direction) => {
    const slider = sliderRef.current;

    if (!slider || window.innerWidth >= 992) return;

    const slide = slider.firstElementChild;

    if (!slide) return;

    const slideWidth = slide.getBoundingClientRect().width;

    slider.scrollBy({
      left: direction * slideWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.wrapper}>
      <button type="button" className={`${styles.arrow} ${styles.prev}`} onClick={() => handleSlide(-1)} disabled={!canPrev} aria-label="Previous">
        <FaChevronLeft />
      </button>

      <div ref={sliderRef} className={styles.slider}>
        {heroStats.map((item) => (
          <div key={item.id} className={styles.slide}>
            <HeroStatCard item={item} />
          </div>
        ))}
      </div>

      <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={() => handleSlide(1)} disabled={!canNext} aria-label="Next">
        <FaChevronRight />
      </button>
    </div>
  );
};

export default HeroStats;
"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "@/components/zoom-parallex.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "../../public/images/1.jpeg";
import image2 from "../../public/images/2.jpeg";
import image3 from "../../public/images/3.jpg";
import image4 from "../../public/images/4.jpg";
import image5 from "../../public/images/5.jpg";
import image6 from "../../public/images/6.jpg";
import image7 from "../../public/images/7.jpeg";

function ZoomParallex() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale10 = useTransform(scrollYProgress, [0, 1], [1, 10]);

  const pictures = [
    { src: image1, scale: scale4 },
    { src: image2, scale: scale5 },
    { src: image3, scale: scale6 },
    { src: image4, scale: scale7 },
    { src: image5, scale: scale8 },
    { src: image6, scale: scale9 },
    { src: image7, scale: scale10 },
  ];

  return (
    <div
      className={styles.container}
      ref={containerRef}>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => (
          <motion.div
            style={{ scale }}
            className={styles.el}
            key={index}>
            <div className={styles.imageContainer}>
              <Image
                src={src}
                alt="image"
                placeholder="blur"
                fill
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
export default ZoomParallex;

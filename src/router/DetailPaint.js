import React, { useEffect, useState, useMemo } from "react";
import styles from "./detailPaint.module.css";
import StarZero from "../img/zeroStar.png";
import StarOne from "../img/oneStar.png";
import StarTwo from "../img/twoStar.png";
import StarThree from "../img/threeStar.png";
import StarFour from "../img/fourStar.png";
import StarFive from "../img/fiveStar.png";

function DetailPaint({ summary, coverImg, title, star }) {
  const getIfStar = (star) => {
    if (star < 1) {
      return StarZero;
    } else if (star < 3) {
      return;
    } else if (star < 5) {
      return StarTwo;
    } else if (star < 7) {
      return StarThree;
    } else if (star < 8) {
      return StarFour;
    } else if (star <= 10) {
      return StarFive;
    }
  };

  const starImgSrc = useMemo(() => getIfStar(star), [star]);
  return (
    <div className={styles.blackBox}>
      <div className={styles.contentBox}>
        <div className={styles.leftContent}>
          <div className={styles.titleStyle}>{title}</div>
          <img
            src={starImgSrc}
            className={styles.starStyle}
            alt={"posterimge"}
          />

          <div className={styles.textStyle}>{summary}</div>
        </div>
        <img src={coverImg} className={styles.rightContent} />
      </div>
    </div>
  );
}

export default DetailPaint;

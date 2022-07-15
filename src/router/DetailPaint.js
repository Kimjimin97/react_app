import React, { useEffect, useState } from "react";
import styles from "./detailPaint.module.css";
import starZero from "../img/zeroStar.png";
import starOne from "../img/oneStar.png";
import starTwo from "../img/twoStar.png";
import starThree from "../img/threeStar.png";
import starFour from "../img/fourStar.png";
import starFive from "../img/fiveStar.png";

function DetailPaint({ summary, coverImg, title, star }) {
  const [starImgSrc, setStarImg] = useState("");

  const getIfStar = () => {
    if (star < 1) {
      setStarImg(starZero);
    } else if (star < 2) {
      setStarImg(starOne);
    } else if (star < 3) {
      setStarImg(starTwo);
    } else if (star < 4) {
      setStarImg(starThree);
    } else if (star < 5) {
      setStarImg(starFour);
    } else if (star == 5) {
      setStarImg(starFive);
    }
  };

  useEffect(() => {
    getIfStar();
  }, []);

  console.log(starImgSrc);
  return (
    <div>
      <div className={styles.blackBox}>
        <div className={styles.contentBox}>
          <div className={styles.leftContent}>
            <div className={styles.titleStyle}>{title}</div>
            <img className={styles.starStyle} src={starImgSrc} />
            <div className={styles.textStyle}>{summary}</div>
          </div>
          <img className={styles.rightContent} src={coverImg} />
        </div>
      </div>
    </div>
  );
}

export default DetailPaint;

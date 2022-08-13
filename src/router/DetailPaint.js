import React, { useEffect, useState, useMemo } from "react";
import styles from "./detailPaint.module.css";
import StarZero from "../img/zerostar.png";
import StarOne from "../img/onestar.png";
import StarTwo from "../img/twostar.png";
import StarThree from "../img/threestar.png";
import StarFour from "../img/fourstar.png";
import StarFive from "../img/fivestar.png";

function DetailPaint({ summary, coverImg, title, star }) {
  const getIfStar = () => {
    console.log(star);
    if (star < 1) {
      return StarZero;
    } else if (star < 3) {
      return StarOne;
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

  // ## component가 처음 render할 때 실행되고 다시는 실행되지 않을 function을 넣어준다.
  // 만약 useeffet usememo를 사용한다면?

  const starImgSrc = getIfStar(star);

  // useEffect(() => {
  //   getIfStar();
  // }, []);

  return (
    <div className={styles.blackBox}>
      <div className={styles.contentBox}>
        <div className={styles.leftContent}>
          <div className={styles.titleStyle}>{title}</div>
          <img src={starImgSrc} className={styles.starStyle} />

          <div className={styles.textStyle}>{summary}</div>
        </div>
        <img src={coverImg} className={styles.rightContent} />
      </div>
    </div>
  );
}

export default DetailPaint;

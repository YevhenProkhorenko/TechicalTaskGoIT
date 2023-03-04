import React from "react";
import { useState } from "react";
import css from "../Card/Card.module.css";
import logo from "/./Projects/TechicalTaskGoIT/src/Images/Logo.svg";
import line from "/./Projects/TechicalTaskGoIT/src/Images/Line.png";
import hansel from "/./Projects/TechicalTaskGoIT/src/Images/Hansel.png";
import ellipse from "/./Projects/TechicalTaskGoIT/src/Images/Ellipse.png";

export default function Card() {
  const tweets = 777;
  const followers = 100500;
  const [isFollowing, setIsFollowing] = useState(false);
  const [value, setValue] = useState(followers);

  const handleClick = () => {
    if (isFollowing === false) {
      setIsFollowing(true);
      setValue(followers + 1);
    } else {
      setIsFollowing(false);
      setValue(value - 1);
    }
  };

  return (
    <div className={css.Wrapper}>
      <img src={logo} alt="GoIT" width="60" className={css.Logo} />
      <div className={css.mainContainer}>
        <div className={css.Chat}></div>
        <div className={css.cardLine}>
          <img src={line} alt="Line" />
        </div>
        <div className={css.ellipseWrapper}>
          <img src={ellipse} alt="Ellipse" className={css.EllipseImage} />
        </div>
        <div className={css.userWrapper}>
          <img src={hansel} alt="User" className={css.userPhoto} />
        </div>
        <div className={css.textWrapper}>
          <p className={css.tweets}>{tweets} TWEETS</p>
          <p className={css.followers}>{value} FOLLOWERS</p>
          <button
            type="button"
            className={css.btn}
            onClick={handleClick}
            style={{ background: isFollowing ? "#5CD3A8" : "#EBD8FF" }}
          >
            {isFollowing ? "FOLLOWING" : "FOLLOW"}
          </button>
        </div>
      </div>
    </div>
  );
}

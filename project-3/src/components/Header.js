import React from "react";
import MiniButton from "./MiniButton";
import styles from "../styles/header.module.css";

export default function Header({ score, selected, setSelected ,alert}) {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.left}>
          <p className={styles.score}>{score}</p>
          <p>Total Score</p>
        </div>

        <div className={styles.right}>
          <p className={(alert)?styles.alert:styles.show} >You have not selected any number</p>
          <div className={styles.mini_container}>
            <MiniButton
              text={1}
              selected={selected}
              setSelected={setSelected}
            />
            <MiniButton
              text={2}
              selected={selected}
              setSelected={setSelected}
            />
            <MiniButton
              text={3}
              selected={selected}
              setSelected={setSelected}
            />
            <MiniButton
              text={4}
              selected={selected}
              setSelected={setSelected}
            />
            <MiniButton
              text={5}
              selected={selected}
              setSelected={setSelected}
            />
            <MiniButton
              text={6}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
          <p>Select Number</p>
        </div>
      </section>
    </>
  );
}

import React from "react";
import styles from "./style.module.css";
import { useRouter } from "next/router";

const HomeComponent = () => {
  const route = useRouter();

  const handleRedirect = () => {
    route.push("/yoga");
  };
  return (
    <main className={styles.main}>
      {" "}
      <section className={styles.section}>
        <h1 className={styles.h1}>
          MEDITATION YOGA HAS MANY MEANINGS...{" "}
          <span>WHAT WILL IT MEAN TO YOU?</span>
        </h1>

        <p className={styles.p}>
          Nós criamos treinos <strong>exclusivos e únicos para você</strong>.{" "}
          <br />
          Invista no seu corpo e <strong>
            tenha muito mais performance
          </strong> e <br />
          qualidade de vida.
        </p>

        <button className={styles.button} onClick={handleRedirect}>
          Get Started
        </button>
      </section>
      <img src="./banner.svg" alt="mulher pulando corda em uma academia" />
    </main>
  );
};

export default HomeComponent;

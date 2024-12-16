import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/sun.svg";

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Łukasz Popek"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
        />
      </div>
      <div className={styles.info}></div>
      <h1>
        Łukasz <br /> Popek
      </h1>
      <h2>Senior Software Developer</h2>
      <span>
        <a href="https://twitter.com/" target="_blank"></a>
      </span>
    </section>
  );
}

export default Hero;

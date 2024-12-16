import githubIcon from "../../assets/github-light.svg";
import heroImg from "../../assets/hero-img.png";
import linkedinIcon from "../../assets/linkedin-light.svg";
import themeIcon from "../../assets/sun.svg";
import twitterIcon from "../../assets/twitter-light.svg";
import styles from "./HeroStyles.module.css";
import CV from "../../assets/cv.pdf"
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const {theme, toggleTheme} = useTheme();

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
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}></div>
      <h1>
        Łukasz <br /> Popek
      </h1>
      <h2>Senior Software Developer</h2>
      <span>
        <a href="https://twitter.com/" target="_blank">
          <img src={twitterIcon} alt="Twitter icon" />
        </a>
        <a href="https://github.com/" target="_blank">
          <img src={githubIcon} alt="Github icon" />
        </a>
        <a href="https://linkedin.com/" target="_blank">
          <img src={linkedinIcon} alt="Linkedin icon" />
        </a>
      </span>
      <p>With a passion for developing modern React web app for commercial businesses.</p>
      <a href={CV} download>
        <button className="hover">
         Resume
        </button>
      </a>
    </section>
  );
}

export default Hero;

import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'

function Skills() {
    return (
        <section id="skills" className={styles.container}>
        <h1>Skills</h1>
            <div className={styles.skillList}></div>
            <span>
                <img src={checkMarkIcon} alt="Checkmark icon" />
                <p>HTML</p>
            </span>
        </section>
    );
}

export default Skills;
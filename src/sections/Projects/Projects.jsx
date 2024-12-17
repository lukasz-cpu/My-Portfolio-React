import styles from './ProjectStyles.module.css';
import viberr from '../../assets/viberr.png'

const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}></div>
            <a href='https://github.com/lukasz-cpu' target="_blank">
            <img className="hover" src={viberr} alt="Viber Logo" />
            <h3>Viberr</h3>
            <p>Streaming App</p>
            </a>
        </section>
    );
};

export default Projects;
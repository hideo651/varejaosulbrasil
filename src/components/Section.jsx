import styles from "./Section.module.css";
import frutas from "../assets/frutas.jpg";

const Section = () => {
  return (
    <section className={`${styles.section} container`}>
      <h2>Nossos produtos</h2>
      <ul>
        <li>
          <div className={styles.fosco}>
            <div className={styles.divImg}>
              <img src={frutas} alt="frutas" />
            </div>
            <div className={styles.overlay}>
              <h3>Frutas</h3>
              <p>
                Melhores frutas da região de Marília, ótima qualidade da
                coperativa.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Section;

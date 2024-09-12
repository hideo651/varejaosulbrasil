import styles from "./Main.module.css";

import frutas2 from "../assets/frutas2.svg";
import frutas from "../assets/frutas.png";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.intro} container`}>
        <article className={styles.article}>
          <h1>
            Hortifruti §<br></br> <span>Casa de Carnes</span>
          </h1>
        </article>
        <div className={`${styles.foto} `}>
          <img src={frutas} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Main;

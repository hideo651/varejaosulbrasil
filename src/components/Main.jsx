import styles from "./Main.module.css";
import frutas from "../assets/cesta_frutas.svg";

const Main = () => {
  return (
    <main className={styles.main}>
      <div className={`${styles.intro} container`}>
        <article className={styles.article}>
          <span>Promoções diárias</span>
          <h1>Frutas § Verduras</h1>
          <p>
            Bem-vindo ao Varejão Sul Brasil! Oferecemos frutas, verduras e
            laticínios fresquinhos, vindos diretamente de cooperativas da região
            de Marília-SP, garantindo qualidade e sabor para sua mesa.
          </p>
        </article>
        <div className={`${styles.foto} `}>
          <img src={frutas} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Main;

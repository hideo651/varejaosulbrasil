/* eslint-disable react/no-unescaped-entities */
import styles from "./Section.module.css";
import frutas from "../assets/frutas.jpg";
import vegetais from "../assets/vegetais.jpg";
import laticionios from "../assets/laticinios.jpg";
import ovos from "../assets/ovos.png";
import agua from "../assets/agua.jpg";

const Produtos = () => {
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
        <li>
          <div className={styles.fosco}>
            <div className={styles.divImg}>
              <img src={vegetais} alt="vegetais" />
            </div>
            <div className={styles.overlay}>
              <h3>Vegetais</h3>
              <p>
                Melhores frutas da região de Marília, ótima qualidade da
                coperativa.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.fosco}>
            <div className={styles.divImg}>
              <img src={laticionios} alt="laticinios" />
            </div>
            <div className={styles.overlay}>
              <h3>Queijos e Leite</h3>
              <p>
                Melhores frutas da região de Marília, ótima qualidade da
                coperativa.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.fosco}>
            <div className={styles.divImg}>
              <img src={ovos} alt="ovos" />
            </div>
            <div className={styles.overlay}>
              <h3>Ovos</h3>
              <p>
                Melhores frutas da região de Marília, ótima qualidade da
                coperativa.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.fosco}>
            <div className={styles.divImg}>
              <img src={agua} alt="agua" />
            </div>
            <div className={styles.overlay}>
              <h3>Água</h3>
              <p>
                Melhores frutas da região de Marília, ótima qualidade da
                coperativa.
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div className={styles.texto}>
        <p>
          <span>"</span> Estamos felizes em apresentar a você nossa loja, um
          espaço dedicado à venda de frutas e verduras frescas, colhidas com
          carinho por cooperados da região de Marília. Nossa missão é trazer
          para sua mesa o que há de melhor na agricultura local, garantindo
          produtos de alta qualidade, frescos e saborosos, diretamente dos
          nossos produtores para você. <span>"</span>
        </p>
      </div>
    </section>
  );
};

export default Produtos;

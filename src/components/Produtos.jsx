/* eslint-disable react/no-unescaped-entities */
import styles from "./Produtos.module.css";

import Pesego from "../assets/mercadoria/image3.png";
import Verdura from "../assets/mercadoria/image4.png";
import Maca from "../assets/mercadoria/image6.png";
import Laranja from "../assets/mercadoria/image7.png";
import Batata from "../assets/mercadoria/image8.png";
import Cenoura from "../assets/mercadoria/image9.png";
import Brocolis from "../assets/mercadoria/image1.png";
import Tomate from "../assets/mercadoria/image2.png";

const Produtos = () => {
  const produtos = [
    { name: "Pesego", img: Pesego, cor: "#FEEFEA" },
    { name: "Verdura", img: Verdura, cor: "#FFF3FF" },
    { name: "Maça", img: Maca, cor: "#FEEFEA" },
    { name: "Laranja", img: Laranja, cor: "#ECFFEC" },
    { name: "Batata", img: Batata, cor: "#FFFCEB" },
    { name: "Cenoura", img: Cenoura, cor: "#DEF9EC" },
    { name: "Tomate", img: Tomate, cor: "#FEEFEA" },
    {
      name: "Brocolis",
      img: Brocolis,
      cor: "#DEF9EC",
    },
  ];
  return (
    <section className={`${styles.section} container`}>
      <h2>Nossos produtos</h2>
      <ul className={styles.produtos}>
        {produtos.map((produto, index) => {
          return (
            <li key={index} style={{ background: produto.cor }}>
              <img src={produto.img} alt="" />
              <p>{produto.name}</p>
            </li>
          );
        })}
        {/* <li>
          <div className={styles.fosco}>
            <div className={styles.divImg}>
              <img src={carnes} alt="agua" />
            </div>
            <div className={styles.overlay}>
              <h3>Carnes</h3>
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
        </li> */}
      </ul>
    </section>
  );
};

export default Produtos;

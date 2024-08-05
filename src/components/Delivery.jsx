import { FaWhatsapp } from "react-icons/fa";
import styles from "./Delivery.module.css";
import Ifood from "../assets/ifood.svg";
import endereco from "../assets/endereco.png";

const Delivery = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.delivery} container`}>
        <div className={styles.texto}>
          <h2>Delivery</h2>
          <div className={styles.ifood}>
            <p>
              Nossa loja oferece frutas e verduras frescas com entrega rápida
              através do{" "}
              <a target="_blank" href="https://www.ifood.com.br/inicio">
                iFood
              </a>
              .
            </p>
            <div className={styles.imgIfood}>
              <a target="_blank" href="https://www.ifood.com.br/inicio">
                <img src={Ifood} alt="ifood" />
              </a>
            </div>
          </div>
          <p>
            Tem um restaurante?<br></br> Fale conosco pelo WhatsApp e obtenha
            preços exclusivos!
          </p>
          <div className={styles.whatsapp}>
            <a
              className={styles.cardImg}
              target="_blank"
              href="https://wa.me/5514998374223"
            >
              <FaWhatsapp color="white" size={40} />
            </a>
            <p>(14) 999-999-99</p>
          </div>
          <p>Endereço: Av. das Indústrias, 136</p>
          <div className={styles.imgLoja}>
            <img src={endereco} alt="localização da loja" />
          </div>
          <p>Horario de funcionamento: Seg à Sex das 8 às 18</p>
        </div>
      </div>
    </section>
  );
};

export default Delivery;

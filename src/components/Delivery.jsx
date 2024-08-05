import { FaWhatsapp } from "react-icons/fa";
import styles from "./Delivery.module.css";
import Ifood from "../assets/ifood.svg";

const Delivery = () => {
  return (
    <section className={`${styles.section}`}>
      <div className={`${styles.delivery} container`}>
        <div className={styles.texto}>
          <h2>Delivery</h2>
          <p>
            Nossa loja oferece frutas e verduras frescas com entrega rápida
            através do{" "}
            <a target="_blank" href="https://www.ifood.com.br/inicio">
              iFood
            </a>
            .
          </p>
          <p>
            Tem um restaurante? Fale conosco pelo WhatsApp e obtenha preços
            exclusivos!
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
          <p>Horario de funcionamento: Seg à Sex das 8 às 18</p>
        </div>
        <div>
          <a target="_blank" href="https://www.ifood.com.br/inicio">
            <img src={Ifood} alt="ifood" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Delivery;

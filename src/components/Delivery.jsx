import { FaWhatsapp } from "react-icons/fa";
import styles from "./Delivery.module.css";
import Ifood from "../assets/ifood.svg";
import endereco from "../assets/endereco.jpg";
import icone from "../assets/sacola.png";
import { LuMapPin } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import delivery from "../assets/delivery.png";
import { SiIfood } from "react-icons/si";
import { GrRestaurant } from "react-icons/gr";

const Delivery = () => {
  return (
    <section className={`${styles.section} container`}>
      {/* <ul className={`${styles.delivery} container`}>
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
          <p>Endereço: R. Inconfidência, 72 - Marília, SP</p>
          <div className={styles.imgLoja}>
            <img src={endereco} alt="localização da loja" />
          </div>
          <p>Horario de funcionamento: Seg à Sex das 8 às 18</p>
        </div>

      </ul> */}
      <div className={styles.conteudo}>
        <div className={styles.titulo}>
          <div className={styles.icone}>
            <img src={icone} alt="" />
          </div>
          <h3>Hortifruti Sul Brasil</h3>
        </div>
        <ul className={styles.infos}>
          <li>
            <p>
              <LuMapPin size={20} color="#5F9548" /> <span>Endereço:</span> Rua
              Inconfidência, 72 - Marília, SP
            </p>
          </li>
          <li>
            <p>
              <BsTelephone size={20} color="#5F9548" /> <span>Telefone:</span>{" "}
              (14) 99684-8475
            </p>
          </li>
          <li>
            <p>
              <MdOutlineEmail size={20} color="#5F9548" /> <span>Email:</span>{" "}
              sulbrasil@email.com
            </p>
          </li>
          <li>
            <p>
              <FaRegClock size={20} color="#5F9548" />{" "}
              <span>Horário de funcionamento:</span> 8:00 - 18:00, Segunda à
              Sexta
            </p>
          </li>
        </ul>
      </div>
      <div>
        <div className={styles.conteudo}>
          <div className={styles.titulo}>
            <div className={styles.icone}>
              <img src={delivery} alt="" />
            </div>
            <h3>Delivery Sul Brasil</h3>
          </div>
          <ul className={styles.infos}>
            <li>
              <p>
                <SiIfood size={20} color="red" /> <span>Ifood:</span> Estamos
                atendendo no aplicativo
              </p>
            </li>
            <li>
              {" "}
              <p>
                <GrRestaurant size={20} color="#5F9548" />{" "}
                <span>Restaurante:</span> Condições especiais para donos de
                restaurantes.
              </p>
            </li>
            <li>
              <p>
                <FaWhatsapp size={20} color="#5F9548" /> <span>WhatsApp:</span>{" "}
                Atendemos pedidos via WhatsApp com promoções diarias.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Delivery;

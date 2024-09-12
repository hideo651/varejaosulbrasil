import styles from "./Localiza.module.css";

const Localiza = () => {
  return (
    <section className={styles.section}>
      <nav className="container">
        <ul>
          <li>
            <p>Aberto de segunda à Sexta das 08:00 às 18:00. </p>
          </li>
          <li>
            <p>Endereço: Rua Inconfidência, 72 - Marília, SP.</p>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Localiza;

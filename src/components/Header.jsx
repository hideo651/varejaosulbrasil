import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.logoDiv}>
          <div className={styles.logo}>
            <img src="../../src/assets/logo_sul_brasil.jpg" alt="logo" />
          </div>
          <h3>HORTIFRUTI SUL BRASIL</h3>
        </div>
        <div className={styles.contatos}>
          <p>WhatsApp: (14) 999-9999-99</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;

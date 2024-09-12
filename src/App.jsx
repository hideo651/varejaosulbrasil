import "./App.css";
import Carne from "./components/Carne";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Localiza from "./components/Localiza";
import Loja from "./components/Loja";
import Main from "./components/Main";
import Produtos from "./components/Produtos";

function App() {
  return (
    <>
      <Localiza />
      <Header />
      <Main />
      <Loja />
      <Produtos />
      <Carne />
      <Delivery />
      <Footer />
    </>
  );
}

export default App;

import "./App.css";
import Delivery from "./components/Delivery";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Produtos from "./components/Produtos";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Produtos />
      <Delivery />
      <Footer />
    </>
  );
}

export default App;

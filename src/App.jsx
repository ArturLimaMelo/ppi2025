import "./styles/theme.css";
import "./styles/global.css";
import { MyTextList } from "./components/MyTextList";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { LuckyNumber } from "./components/etapa2/LuckyNumber";
import { Product } from "./components/etapa2/Product";

export default function App() {
  return (
    <>
      <Header />
      <Product/>
    </>
  );
}

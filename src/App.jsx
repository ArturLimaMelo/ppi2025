import "./styles/theme.css";
import "./styles/global.css";
import { MyTextList } from "./components/MyTextList";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

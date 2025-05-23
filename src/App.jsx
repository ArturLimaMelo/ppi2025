import "./styles/theme.css";
import "./styles/global.css";
import { MyText } from "./components/MyText";

export default function App() {
  const texts = [
    { text: "Meu texto ", title: "Meu titulo " },
    { text: "Meu texto ", title: "Meu titulo " },
    { text: "Meu texto ", title: "Meu titulo " },
    { text: "Meu texto ", title: "Meu titulo " },
    { text: "Meu texto ", title: "Meu titulo " },
  ]; // array de objetos com texto e título

  return (
    <>
      {
        texts.map(
          (item, index) => (
            index++,
            (<MyText title={item.title + index}>{item.text + index}</MyText>)
          )
        ) //item.text é o filho de MyText <Pai classe="">Filho</Pai>
      }
    </> // Abrimos {} para podermos programar em JS dentro do JSX
  );
}

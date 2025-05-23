import "./styles/theme.css";
import "./styles/global.css";
import { MyText } from "./components/MyText";

export default function App() {
  const text = [
    { text: "Meu texto ", title: "Meu titulo " },
    { text: "Meu texto ", title: "Meu titulo " },
    { text: "Meu texto ", title: "Meu titulo " },
  ]; // array de objetos com texto e título

  return (
    <>
      {
        text.map(
          (item, index) => (
            index++,
            (<MyText title={item.title + index}>{item.text + index}</MyText>)
          )
        ) //item.text é o filho de MyText <Pai classe="">Filho</Pai>
      }
    </>
  );
}

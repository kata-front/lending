import type { FC } from "react";
import './styles/app.scss'
import Header from "./components/header-md/header";
import Title from "./components/title-md/title";
import Slides from "./components/slides-md/slides";

const App: FC = () => {
  return (
    <>
      <Header />
      <Title />
      <Slides />
    </>
  )
}

export default App
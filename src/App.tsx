import appCss from "./App.module.css";
import Header from "./components/header/header.tsx";
import TitleScreen from "./components/titleScreen/titleScreen.tsx";
import BackgroundCanvas from "./components/backgroundCanvas/backgroundCanvas.tsx";

function App() {
  return (
    <div className={appCss.main_container}>
      <div className={appCss.header}>
        <Header />
      </div>
      <div id="canvas-container" className={appCss.canvas_container}>
        <BackgroundCanvas />
      </div>
      <div>
        <TitleScreen />
      </div>
    </div>
  );
}

export default App;

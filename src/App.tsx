import appCss from "./App.module.css";
import Header from "./components/header/header.tsx";

function App() {
  return (
    <>
      <div className={appCss.header}>
        <Header />
      </div>
      <div>
        <div>Hello!</div>
      </div>
    </>
  );
}

export default App;

import Background from "./components/Background";
import MainContainer from "./components/MainContainer";

import "./index.css";
function App() {
  return (
    <div className="w-full lg:h-auto h-screen min-h-max flex justify-center align-middle">
      <Background />
      <MainContainer />
    </div>
  );
}

export default App;

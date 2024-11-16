import Background from "./components/Background";
import MainContainer from "./components/MainContainer";

import "./index.css";
function App() {
  return (
    <div className="w-full lg:h-auto h-full min-h-max max-h-full flex justify-center align-middle">
      <Background />
      <MainContainer />
    </div>
  );
}

export default App;

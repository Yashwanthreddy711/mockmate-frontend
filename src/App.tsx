import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Room from "./components/Room";

const App: React.FC = () => {
  return (
  <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};

export default App;

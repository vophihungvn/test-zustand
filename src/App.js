import "./App.css";
import { ChuckNorris } from "./ChuckNorris";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        padding: 24,
      }}
    >
      <ChuckNorris />
    </div>
  );
}

export default App;

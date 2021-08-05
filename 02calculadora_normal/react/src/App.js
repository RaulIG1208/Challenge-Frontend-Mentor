
import Calculator from "./components/Calculator";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div>
      <ThemeProvider>
        <Calculator />
      </ThemeProvider>
    </div>
  );
}

export default App;

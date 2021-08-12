import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { HeaderProvider } from "./context/HeaderContext";
import { MainProvider } from "./context/MainContext";

function App() {
  return (
    <>
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <MainProvider>
        <Main />
      </MainProvider>
      <Footer />
    </>
  );
}

export default App;

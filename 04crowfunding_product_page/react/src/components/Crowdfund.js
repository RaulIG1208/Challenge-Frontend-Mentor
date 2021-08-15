import { HeaderProvider } from "../context/HeaderContext";
import Header from "./Header"
import Main from "./Main"


const Crowdfund = () => {
  return (
    <>
    <HeaderProvider>
      <Header />
    </HeaderProvider>
      <Main />
    </>
  );
};

export default Crowdfund;
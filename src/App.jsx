import Footer from "./components/Footer";
import Greeting from "./components/greeting";
import Header from "./components/Header";
import Maincontent from "./components/Maincontent";
import Product from "./components/Product";
import Productlist from "./components/Productlist";
import Userlist from "./components/Userlist";

const App = () => {
  return (
    <>
      <Header />
      <Maincontent />
      <Footer />
      <Greeting />
      <Product />
      <Userlist />
      <Productlist />
    </>
  );
};

export default App;

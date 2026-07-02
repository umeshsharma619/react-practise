import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Maincontent from "./components/Maincontent";
import Product from "./components/Product";
import Productlist from "./components/Productlist";
import ProductProp from "./components/productprop";
import Userlist from "./components/Userlist";
import Userlog from "./components/Userlog";

import Personprop from "./components/Personprop";
import Timeofday from "./components/Timeofday";
import Stylecard from "./components/Stylecard";
import Random from "./components/random";
import Savename from "./components/Savename";
import Counter from "./components/counter";
import Todolist from "./components/Todolist";
import Userupdate from "./components/Userupdate";
import ShoppingLIst from "./components/ShoppingLIst";
import Useeffectpractise from "./components/Useeffectpractise";
import FatchData from "./components/FatchData";

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
      <Personprop>
        <h1>my name is umesh sharma</h1>
        <p>welcome to my website</p>
      </Personprop>
      <ProductProp name="laptop" price={800} />
      <Userlog isadmin={true} isloggedin={true} />
      <Timeofday time="morning" />
      <Stylecard />
      <Random />
      <Savename />
      <Counter />
      <Todolist />
      <Userupdate />
      <ShoppingLIst />
      <Useeffectpractise />
      <FatchData />
    </>
  );
};

export default App;

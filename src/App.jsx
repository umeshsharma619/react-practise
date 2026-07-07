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
import ShoppingLIst from "./components/ShoppingLIst";
import Useeffectpractise from "./components/Useeffectpractise";
import FatchData from "./components/FatchData";
import Compo1 from "./components/compo1";
import { createContext } from "react";
import Usereducerfunction from "./components/Usereducerfunction";
import Timerstop from "./components/Timerstop";
export const Dataa = createContext();
export const Dataa1 = createContext();

const App = () => {
  const bike = "Hero xpuse 200 4v";
  const kimat = 200000;
  return (
    <>
      <Header />
      <Maincontent />
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
      <ShoppingLIst />
      <Useeffectpractise />
      <FatchData />
      <Dataa.Provider value={bike}>
        <Dataa1.Provider value={kimat}>
          <Compo1 />
        </Dataa1.Provider>
      </Dataa.Provider>
      <Usereducerfunction />
      <Timerstop />
    </>
  );
};

export default App;

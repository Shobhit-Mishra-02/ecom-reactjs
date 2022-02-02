import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Registration from "./Registration";
import userInfo from "./context";
import { useState } from "react";
import { useEffect } from "react";
import Products from "./admin/Products";
import Users from "./admin/Users";
import RemoveProduct from "./admin/Removeprod";
import ProductView from "./ProductView";

const App = () => {
  const [user, setUser] = useState("{}");

  useEffect(async () => {
    if (localStorage.length) {
      const data = await fetch(
        `http://localhost:5000/getjwt/${localStorage.getItem("token")}`
      );
      const json = await data.json();
      console.log(json);
      setUser(JSON.stringify(json));
    }
  }, []);
  return (
    <userInfo.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Route path="/admin/removeprod">
            <RemoveProduct />
          </Route>
          <Route path="/admin/users">
            <Users />
          </Route>
          <Route path="/admin/products">
            <Products />
          </Route>
          <Route path="/product/:id">
            <ProductView />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </userInfo.Provider>
  );
};

render(<App />, document.getElementById("root"));

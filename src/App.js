import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import CRUD from "./components/CRUD";
import AllUsers from "./components/AllUsers";
import AddUsers from "./components/AddUsers";
import Error from "./components/Error";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditUsers from "./components/EditUsers";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={CRUD} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUsers} />
        <Route exact path="/edit/:id" component={EditUsers} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

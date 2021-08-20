import React, {useState} from 'react'
import List from "./components/List";
import Create from "./components/Create";
import Update from "./components/Update";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [toEdit, setToEdit] = useState("")

  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
        <Link to="/list" className="btn btn-dark">
            Inicio
          </Link>

          <Link to="/" className="btn btn-dark">
            Crear
          </Link>

          <Link to="/update" className="btn btn-dark">
            Actualizar
          </Link>
        </div>
        <hr/>

        <Switch>
          <Route path="/" exact>
            <Create/>
          </Route>

          <Route path="/list">
            <List toEdit={toEdit} setToEdit={setToEdit}/>
          </Route>

          <Route path="/update">
            <Update toEdit={toEdit} setToEdit={setToEdit}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { userStorageKey } from "./auth/authSettings"

import { NavBar } from "./nav/NavBar"
import { AppViews } from "./AppViews"
import { Logout } from "./auth/LogOut"
// import { Navbar } from "react-bootstrap"


export const BackyardBotanist = () => (
    <>
    <section className="App">
    <Route render={() => {
      if (sessionStorage.getItem(userStorageKey)) {
        return (
          <>
          <NavBar />
          <AppViews />
          </>
        )
      } else {
        return <Redirect to="/login" />;
      }
  }} />

  <Route path="/login">
    <Login />
  </Route>
  <Route path="/register">
    <Register />
  </Route>
  <Route path="/logout">
    <Logout />
  </Route>
  </section>
  </>
  );




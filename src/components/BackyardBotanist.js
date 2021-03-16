// import logo from './logo.svg';
// import './App.css';
import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { userStorageKey } from "./auth/authSettings"
import { UserProvider } from "./users/UserProvider"
import { NavBar } from "./users/UserList"
import { AppViews } from "./AppViews"


export const BackyardBotanist = () => (
    <>
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
  </>
  );




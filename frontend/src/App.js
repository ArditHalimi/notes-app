import {
  Route, useLocation
} from "react-router-dom";


import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'
import LoginPage from './pages/LoginPage'
import {useEffect, useState} from "react";
import RegisterPage from './pages/RegisterPage';


function App() {
    const location = useLocation()

    const [isAuth, setStatusAuth] = useState(false);

    useEffect(() => {
    // send jwt to API to see if it's valid
    let token = localStorage.getItem("token");
    if(token != null)
    {
        setStatusAuth(true)
        if(location.pathname == "/login" || location.pathname == "/register")
        {
            window.location.href =  "/";
        }
    }
    else
    {
        setStatusAuth(false)
        if(location.pathname != "/login" && location.pathname != "/register")
        {
            window.location.href =  "/login";
        }
    }
      })

  return (

      <div className="container dark">
        <div className="app">
            {isAuth && <Header/>}
            <Route path="/" exact component={NotesListPage} />
            <Route path="/note/:id" component={NotePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />

        </div>
      </div>
  );
}

export default App;
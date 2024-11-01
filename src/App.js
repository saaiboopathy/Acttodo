
import Login from './pages/Login'
import Signup from "./pages/Signup";
import Landingpage from "./pages/Landing"
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { useState } from "react";


function App() {

  const [users, setusers] = useState([{ Username: "john", Password: "123" }])

  return (<div><BrowserRouter>
    <Routes>
      <Route path='/' element={<Login users={users} setusers={setusers}></Login>}></Route>
      <Route path='/Signup' element={<Signup users={users} setusers={setusers}></Signup>}></Route>
      <Route path='/landing' element={<Landingpage></Landingpage>}></Route>
    </Routes>
  </BrowserRouter>
  </div>)
}

export default App
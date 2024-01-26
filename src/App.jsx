import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/signup" element={<Signup />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

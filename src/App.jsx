import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import StudentProfile from "./components/student/StudentProfile";
import FetchLayout from "./components/FetchLayout";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/signup" element={<Signup />}></Route>
                <Route
                    path="/students"
                    element={<FetchLayout find={"student"} />}
                ></Route>
                <Route path="/student/:id" element={<StudentProfile />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import StudentProfile from "./components/student/StudentProfile";
import FetchLayout from "./components/FetchLayout";
import Del from "./components/Del";
import UpdateStudent from "./components/student/UpdateStudent";
import "./global.css";
import JobDescription from "./components/jobs/JobDescription";

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
                <Route
                    path="/student/update/:id"
                    element={<UpdateStudent />}
                ></Route>
                <Route path="/jobs/:id" element={<JobDescription />}></Route>
                <Route path="/del" element={<Del />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home, Header, FetchLayout } from "./components";
import { Login, Signup } from "./components/authentication";
import { StudentProfile, UpdateStudent } from "./components/student";
import JobDescription from "./components/jobs/JobDescription";
import FetchCompany from "./components/company/FetchCompany";
import DashboardLayout from "./components/faculty/DashboardLayout";
import "./global.css";
import Del from "./components/Del";

function App() {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<Home />}></Route>
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
                <Route path="/companies" element={<FetchCompany />}></Route>

                <Route
                    path="/faculty/dashboard"
                    element={<DashboardLayout />}
                ></Route>

                <Route path="/del" element={<Del />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { JobOutlet, Header, FetchLayout } from "./components";
import { Login, Signup } from "./components/authentication";
import { StudentProfile, UpdateStudent } from "./components/student";
import JobDescription from "./components/jobs/JobDescription";
import FetchCompany from "./components/company/FetchCompany";
import DashboardLayout from "./components/faculty/DashboardLayout";
import "./global.css";
import Del from "./components/Del";
import RootLayout from "./components/RootLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route path="jobs" element={<JobOutlet />}></Route>
                    <Route path="companies" element={<FetchCompany />}></Route>
                    <Route path="students" element={<FetchLayout />}></Route>
                    {/* <Route path="history" element={<Home />}></Route> */}

                    {/* Authentication */}
                    <Route path="login" element={<Login />}></Route>
                    <Route path="signup" element={<Signup />}></Route>
                </Route>
                {/* <Route exact path="/" element={<Home />}></Route>
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

                <Route path="/del" element={<Del />}></Route> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

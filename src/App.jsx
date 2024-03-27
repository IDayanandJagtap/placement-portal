import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login, Signup } from "./components/authentication";
import {
    JobOutlet,
    CompanyOutlet,
    RootLayout,
    StudentOutlet,
    DashboardContainer,
} from "./components";
import { JobProfileContainer } from "./components/jobs";
import { CompanyProfileContainer } from "./components/company";
import { StudentProfileContainer } from "./components/student";
import "./global.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RootLayout />}>
                    <Route exact path="jobs" element={<JobOutlet />}></Route>
                    <Route
                        exact
                        path="companies"
                        element={<CompanyOutlet />}
                    ></Route>
                    <Route
                        exact
                        path="students"
                        element={<StudentOutlet />}
                    ></Route>
                    <Route
                        exact
                        path="/me"
                        element={<DashboardContainer />}
                    ></Route>
                    {/* <Route path="history" element={<Home />}></Route> */}

                    {/* Dynamic Routes */}
                    <Route
                        exact
                        path="job/:id"
                        element={<JobProfileContainer />}
                    ></Route>
                    <Route
                        exact
                        path="company/:id"
                        element={<CompanyProfileContainer />}
                    ></Route>
                    <Route
                        exact
                        path="students/:id"
                        element={<StudentProfileContainer />}
                    ></Route>

                    {/* Authentication */}
                    <Route path="login" element={<Login />}></Route>
                    <Route path="signup" element={<Signup />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
    {/* 
      <Routes>
        <Route path="/" element={<h1>layout</h1>}>
          <Route index element={<LandingPage/>}/>
          <Route path="login" element={<h1>login</h1>}/>
          <Route path="signup" element={<h1>signup</h1>}/>
          <Route path="about" element={<h1>about</h1>}/>
        </Route>
      </Routes>
     */}
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

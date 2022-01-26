import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import Login from "./pages/auth/login/login";
import SignUp from "./pages/auth/signup/signUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage/mainPage";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

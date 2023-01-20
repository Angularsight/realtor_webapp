import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/components/Navbar";
import Offers from "./pages/Offers";
import ForgotPassword from "./pages/profile/ForgotPassword";
import Profile from "./pages/profile/Profile";
import SignIn from "./pages/profile/SignIn";
import SignUp from "./pages/profile/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
      <BrowserRouter>

         {/* Placing Navbar outside Routes will keep it constant in all the pages and paths */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/offers" element={<Offers />}/>
        
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

    </>
  );
}

export default App;

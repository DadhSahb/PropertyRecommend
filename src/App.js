import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Missing from "./Components/Layout/Missing";
import Unauthorized from "./Components/Layout/Unauthorized";
import Layout from "./Components/Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Authentication from "./Components/Authentication/Authentication";
import UserDashboard from "./Components/Dashboard/UserDashboard";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import Sell from "./Components/Sell/Sell";
import ManageSell from "./Components/Sell/ManageSell";
import SellEdit from "./Components/Sell/SellEdit";
import Rent from "./Components/Rent/Rent";
import ManageRent from "./Components/Rent/ManageRent";
import RentEdit from "./Components/Rent/RentEdit";
import AdminLogin from "./Components/Admin/adminLogin";
import SellPanel from "./Components/Admin/SellPage";
import RentPanel from "./Components/Admin/RentPage";
import Conversation from "./Components/utils/conversation";
import UserProfile from "./Components/Authentication/userProfile";
import { useSelector } from "react-redux";
import AboutUs from "./Components/Dashboard/AboutUs";
import ContactUs from "./Components/Dashboard/ContactUs";

function App() {
  const user = useSelector((state) => state.user.userInfo);
  const isAuthenticated = user.role === "admin" || user.role === "user";

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Authentication />} />
          <Route path="/Unauthorized" element={<Unauthorized />} />
          <Route path="/adminLogin" element={<AdminLogin />} />

          {/* Protected Admin Routes */}
          {isAuthenticated && user.role === "admin" && (
            <>
              <Route path="/AdminDashboard" element={<AdminDashboard />} />
              <Route path="/admin/rent" element={<SellPanel />} />
              <Route path="/admin/sell" element={<RentPanel />} />
            </>
          )}

          {/* Protected User Routes */}
          {isAuthenticated && user.role === "user" && (
            <>
              <Route path="/UserDashboard" element={<UserDashboard />} />
              <Route
                path="/UserProfile"
                element={<UserProfile user={user} />}
              />
              <Route path="/Sell" element={<Sell />} />
              <Route path="/Rent" element={<Rent />} />
              <Route path="/ManageSell" element={<ManageSell />} />
              <Route path="/ManageRent" element={<ManageRent />} />
              <Route path="/SellEdit" element={<SellEdit />} />
              <Route path="/RentEdit" element={<RentEdit />} />
              <Route
                path="/Conversation"
                element={<Conversation currentUser={user} />}
              />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/ContactUs" element={<ContactUs />} />
            </>
          )}

          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>

      <ToastContainer
        style={{ zIndex: "1000000000000000000000" }}
        autoClose={2000}
      />
    </>
  );
}

export default App;

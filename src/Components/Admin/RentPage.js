import React from "react";
import AdminNavbar from "./utils/AdminNavbar";
import styles from "./AdminPanel.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../Redux/user-slice";
import LogoutIcon from "@mui/icons-material/Logout";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import RentTable from "./utils/RentTable";
function RentPanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(setUserInfo({})); // Dispatching setUserInfo action with an empty object payload
    navigate("/adminLogin");
  };
  return (
    <div className={styles.Main}>
      <AdminNavbar />
      <div className={styles.container}>
        <h1>Admin Panel</h1>
        <div className={styles.icons}>
          <PermIdentityIcon />
          <LogoutIcon className={styles.logout} onClick={handleLogout} />
        </div>
        <h2>Rent</h2>
        <RentTable />
      </div>
    </div>
  );
}

export default RentPanel;

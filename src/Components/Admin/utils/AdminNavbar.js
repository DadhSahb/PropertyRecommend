import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Store, ShoppingBasket } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import "./styles.css";

function AdminNavbar() {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Sidebar
        collapsed={collapsed}
        onToggleCollapse={handleToggleCollapse}
        className="sidebar"
      >
        <Menu
          iconShape="square"
          className="menu"
          styles={{
            menuItem: {
              button: {
                "&.active": {
                  backgroundColor: "#13395e",
                  color: "#b6c8d9",
                },
              },
            },
          }}
        >
          <h1 className="admin-heading">Admin Dashboard</h1>

          <MenuItem>
            <Link to="/adminDashboard" className="sidebar-link">
              <PeopleIcon />
              <span className="menu-text">Users</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/admin/rent" className="sidebar-link">
              <Store />
              <span className="menu-text">Sell</span>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/admin/sell" className="sidebar-link">
              <ShoppingBasket />
              <span className="menu-text">Rent</span>
            </Link>
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
}

export default AdminNavbar;

import React, { useState } from "react";
import UserNavbar from "../Navbar/UserNavbar";
import styles from "./UserDashboard.module.css";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import GoogleMaps2 from "../Maps/GoogleMapDashboard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SellDashboard from "./SellDashboard";
import RentDashboard from "./RentDashboard";
import SearchComponentResults from "./SearchComponent";
import HotList from "./HotListItems";
import Footer from "./../Navbar/Footer";
import Cities from "../utils/Cities";

function UserDashboard() {
  const CssTextField = styled(TextField)({
    input: {
      color: "white",
      "&::placeholder": {
        opacity: 1,
        minWidth: "100%",
      },
    },
    label: { color: "white" },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  });

  const [data, setdata] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [userInput, setUserInput] = useState("Islamabad");
  const city = "your city";
  const searchdata = (e) => {
    setdata(e.target.value);
    console.log(e.target.value);
  };
  // Update the searchbtn function to include the city parameter
  const searchBtn = (userInput) => {
    // Perform the search and set the search results
    const url = `http://192.168.18.46:5000/search_by_city?city=${userInput}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error: Unable to fetch search results");
        }
      })
      .then((data) => {
        // Process the received data
        console.log(data);
        setSearchResults(data); // Set the search results
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const [isUploadOpen, setIsUploadOpen] = useState(true);
  const [showSellingList, setShowSellingList] = useState(true);
  const [showHotList, setShowHotList] = useState(true);
  const [showRentalList, setShowRentalList] = useState(true);

  const handleCloseUpload = () => {
    setIsUploadOpen(false);
  };

  const handleLocationChange = (lat, lng) => {
    // Handle location change logic here
  };

  const handleBuyButtonClick = () => {
    setShowSellingList(true);
    setShowHotList(false);
    setShowRentalList(false);
  };

  const handleRentButtonClick = () => {
    setShowSellingList(false);
    setShowHotList(false);
    setShowRentalList(true);
  };
  return (
    <>
      <div className={styles.Main}>
        <UserNavbar />
        <div className={styles.img}>
          <div
            style={{ display: "flex", flexDirection: "column", width: "50%" }}
          >
            <h2 style={{ color: "#fff", textAlign: "center" }}>
              Search plots for sale in Pakistan
            </h2>
            <div
              style={{
                alignContent: "row",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "5px",
              }}
            >
              <button
                className={styles.transparentButton}
                onClick={handleBuyButtonClick}
              >
                Buy
              </button>
              <button
                className={styles.transparentButton}
                onClick={handleRentButtonClick}
              >
                Rent
              </button>
            </div>
            {/* <MiniSearchBar /> */}
            <div className={styles.search}>
              <CssTextField
                id="custom-css-outlined-input"
                fullWidth
                sx={{
                  borderRadius: "80px",
                  fontFamily: "Poppins, sans-serif",
                  minWidth: "150%",
                }}
                label="Content Based Search"
                variant="outlined"
                onChange={() => searchdata}
              />
              <Cities userInput={userInput} setUserInput={setUserInput} />
              <button onClick={() => searchBtn(userInput)}>Find</button>
            </div>
          </div>
        </div>
        <>
          {isUploadOpen && (
            <GoogleMaps2
              closeUpload={handleCloseUpload}
              onLocationChange={handleLocationChange}
            />
          )}
        </>
        <div className="main">
          <div className={styles.aaa}>
            {searchResults.length > 0 ? (
              <SearchComponentResults searchResults={searchResults} />
            ) : searchResults.length === 0 ? (
              <p>No Result Found</p>
            ) : null}
          </div>

          {showHotList && (
            <div className="hotList">
              <HotList />
            </div>
          )}

          {showSellingList && (
            <div className="sell">
              <h6>Selling List</h6>
              <SellDashboard />
            </div>
          )}
          {showRentalList && (
            <div className="sell" style={{ marginBottom: "60px" }}>
              <h6>Rent List</h6>
              <RentDashboard />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserDashboard;

import "../css/Global.css";
import Search from "./Search";
import Header from "./Header";
import Filter from "./Filter";
import ListItem from "./ListItem";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Modal from './Modal.js'


const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [eventData,setEventData] = useState([]);
  useEffect(() => {
    getAllVanue();
  }, []);

  function getAllVanue() {
    setIsLoading(true);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    fetch("http://localhost:3001/getAllVenues", {
      method: "GET",
      headers: {
        headers,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEventData(data)
        setIsLoading(false);
      });
  }
  return (
    <>
      <Modal show={isLoading} />
      <div className="bg-white p-0">
        {/* Navbar End */}
        {/* Header Start */}
        <Header />
        <Search />
        {/* Header End */}
        {/* Search Start */}
        <Filter />
        {/* Search End */}
        {/* Property List Start */}
        <ListItem eventData={eventData}/>
        {/* Category End */}
        {/* Footer Start */}
        <Footer />
        {/* Footer End */}
        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </>
  );
};
export default Home;

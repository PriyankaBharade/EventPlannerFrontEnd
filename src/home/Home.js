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
  const [searchItem,setSearchItem] = useState([]);
  useEffect(() => {
    getAllVanue();
  }, []);

  function getAllVanue(value='') {
    // setIsLoading(true);
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "searchString": value
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3001/getAllVenues", requestOptions)
  .then(response => response.json())
  .then(result => {
            setEventData(result)
        // setIsLoading(false);
  })
  .catch(error => console.log('error', error));
  }
  return (
    <>
      <Modal show={isLoading} />
      <div className="bg-white p-0">
        {/* Navbar End */}
        {/* Header Start */}
        <Header />
        <Search onKeyChange={(value)=>{
          // setSearchItem(value)
          getAllVanue(value)
        }} />
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

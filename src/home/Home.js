import "../css/Global.css";
import Search from "./Search";
import Header from "./Header";
import Filter from "./Filter";
import ListItem from "./ListItem";
import Footer from "./Footer";
const Home = () => {
  return (
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
      <ListItem />
      {/* Category End */}
      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up" />
      </a>
    </div>
  );
};
export default Home;

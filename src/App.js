import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import Home from './home/Home';
import Details from './details/Details';
import Payment from './payment/Payment';

function App() {
  const Basic=()=>{
    return <h1>BASIC HOME</h1>
  }
  return (

    <Router>
      <Routes>
      <Route path='/' Component={Home} />
      <Route path='/details' Component={Details} />
      <Route path='/payment' Component={Payment} />
      </Routes>
    </Router>

  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import logo from "./Public/logo.png";
import { useState } from "react";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";

function App() {
  const menuList = [
    { name: "Home", link: "/" },
    { name: "Menu", link: "/menu" },
    { name: "Service", link: "/service" },
    { name: "Shop", link: "/shop" },
  ];

  const [searchInput, setSearchInput] = useState("");
  const handleSearch = (evt) => {
    setSearchInput(evt.target.value);
  };

  const userLink = [
    { name: 'About Us', link: '/#' },
    { name: 'Contact Us', link: '/#' },
    { name: 'Order Delivery', link: '/#' },
    { name: 'Payment & Tex', link: '/#' },
    { name: 'Terms of Services', link: '/#' },
  ]

  return (
    <>
      <Router>
        <nav className="header padding">
          <img src={logo} alt="" />
          <ul>
            {menuList.map((item, index) => (
              <li key={index}>
                <Link to {...item.link}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="searchBar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
            >
              <path
                d="M10.5 21C15.7467 21 20 16.5228 20 11C20 5.47715 15.7467 1 10.5 1C5.25329 1 1 5.47715 1 11C1 16.5228 5.25329 21 10.5 21Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26 27L18 19"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearch}
              value={searchInput}
            />
            <div className="basketIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="25"
                viewBox="0 0 23 25"
                fill="none"
              >
                <path
                  d="M4.5 1L1 5.6V21.7C1 22.31 1.24583 22.895 1.68342 23.3263C2.121 23.7577 2.71449 24 3.33333 24H19.6667C20.2855 24 20.879 23.7577 21.3166 23.3263C21.7542 22.895 22 22.31 22 21.7V5.6L18.5 1H4.5Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 6H22"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 10C16 11.3261 15.5259 12.5979 14.682 13.5355C13.8381 14.4732 12.6935 15 11.5 15C10.3065 15 9.16193 14.4732 8.31802 13.5355C7.47411 12.5979 7 11.3261 7 10"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>2</p>
            </div>
          </div>
        </nav>
        <div className="main-content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/menu" exact>
              <Menu searchInput={searchInput} />
            </Route>
            <Route path="/service" exact>
              <h1>Service</h1>
            </Route>
            <Route path="/shop" exact>
              <h1>Shop</h1>
            </Route>
          </Switch>
        </div>
      </Router>
      <footer>
        <div className="padding footer-contaienr">
          <div className='company'>
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.
            </p>
            <div className='social-links'>
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <circle cx="21" cy="21" r="21" fill="#F5DDC4" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <circle cx="21" cy="21" r="21" fill="#F5DDC4" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <circle cx="21" cy="21" r="21" fill="#F5DDC4" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                <circle cx="21" cy="21" r="21" fill="#F5DDC4" />
              </svg>
            </div>
          </div>
          <div className='opening-time'>
            <h5>Opening Restauran</h5>
            <p>Sat-Wet: 09:00am-10:00PM</p>
            <p>Thursdayt: 09:00am-11:00PM</p>
            <p>Friday: 09:00am-8:00PM</p>
          </div>
          <div>
            <h5>User Link</h5>
            <ul>
              {userLink.map((link, index) => {
                  return (
                  <li key={index}>{link.name}</li>
                  )
                })}
            </ul>
          </div>
          <div>
            <h5>Contact Us</h5>
            <p>1234 Country Club Ave</p>
            <p>NC 123456, London, UK</p>
            <p>NC 123456, London, UK</p>
          </div>
        </div>
      </footer>

    </>
  );
}

export default App;

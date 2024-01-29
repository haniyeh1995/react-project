import './App.css'
import { useState, useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Categories from "./Game/Categories.jsx"
import Searchbar from './header/searchbar/searchbar.jsx'
import Contenticon from './header/contenticon/contenticon'
import profileimg from './header/pub/Cafe_Bazaar_logo_2020.jpg'
import Home from './Home/Home.jsx'
import Support from './support/Support.jsx'



function App() {

  const Tabs = [
    { text: "برنامه", link: "/Home", menu: {} },
    {
      text: "بازی", link: "/Categories", menu: {
        item1: "برای شما",
        item2: "دسته بندی ها",
        item3: "کودک",
      }
    },
    { text: "پشتیبانی", link: "/Support", menu: {} },
    { text: "توسعه دهندگان بازار", link: "/developers", menu: {} },
    { text: "تبلیغات در بازار", link: "/advertising", menu: {} },
    { text: "فرصت های شغلی", link: "/job", menu: {} },
  ];

  const profileInfo = profileimg;
  const [selectedView, setSelectedView] = useState(0);
  const [showSecondMenu, setShowSecondMenu] = useState(false);
  const [showThirdMenu, setShowThirdMenu] = useState(false);
  const location = useLocation();

  

  useEffect(() => {

    if (location.pathname === '/Categories') {
      setShowSecondMenu(false);
    } else if (location.pathname === '/Support') {
      setShowThirdMenu(false);
    }
  }, [location.pathname]);


  const handleItemClick = (index) => {
    setSelectedView(index);
    setShowSecondMenu(index === 1);
    setShowThirdMenu(index === 2);

  };

  
  return (

    <div className='container'>
      <div className='main'>
        <div className='header'>
          <img className='profile-img' src={profileInfo} alt="" />
          <div>
            <div className='tabs-group'>
              {Tabs.map((value, index) => (
                <div key={index} onClick={() => handleItemClick(index)} className={index === selectedView ? 'selected-view' : ''}>
                  {index === 2 && showThirdMenu ? (
                    <Link className="sec-menu" to={value.link}>{value.text}</Link>
                  ) : (
                    <>{value.text}</>
                  )}

                  {index === 1 && showSecondMenu && value.menu && (
                    <div className='submenu'>
                      <Link to={value.link}></Link>
                    </div>
                  )}

                  {/* {index === 2 && showThirdMenu && (
                    <Link to={value.link}></Link>
                  )} */}
                </div>
              ))}
            </div>

            {showSecondMenu && (
              <div className="second-menu">
                <div>
                  <div className='sec-item'>{Tabs[1].menu.item1}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="arrow">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </div>
                  <Link to={Tabs[1].link} className='sub'>
                    <div className='sec-item'>{Tabs[1].menu.item2}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="arrow">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </div>
                  </Link>
                  <div className='sec-item'>{Tabs[1].menu.item3}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="arrow">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* {showThirdMenu && (
              <Link to ={Tabs[2].link}></Link>
            )} */}

          </div>

          <div className='search'>
            <Searchbar />
          </div>

          <div className='content-info'>
            <Contenticon profileInfo={profileInfo} />
          </div>

        </div>
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Support" element={<Support />} />

          </Routes>

        </div>

      </div>

    </div>
  )
}


export default App;

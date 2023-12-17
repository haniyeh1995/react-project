
import Header from './header/header.jsx'
import './App.css'
import Programs from './Programs/Programs.jsx'
import Onlinepayment from './OnlinePayment/OnlinePayment.jsx'
import BankApp from './BankApp/BankApp.jsx'
import PracticalProgramm from './PracticalProgramm/PracticalProgramm.jsx'
import PreviousAndNext from './PreviousAndNext/PreviousAndNext.jsx'
import AboutBazar from './AboutBazar/AboutBazar.jsx'
import Footer from './Footer/Footer.jsx'

function App() {
  
  const Tabs = [
    { text: "برنامه", link: "/" },
    { text: "بازی", link: "#" },
    { text: "پشتیبانی", link: "#" },
    { text: "توسعه دهندگان بازار", link: "#" },
    { text: "تبلیغات در بازار", link: "#" },
    { text: "فرصت های شغلی", link: "#" },
  ];

  

  return (
    
      <div className='container'>

        <div className='main'>
          <div className='header'>
            <Header Tabs={Tabs}  />
          </div>
          <div className='program-container'><Programs /></div>
          <div className='online-container'><Onlinepayment/></div>
          <div className='bank-container'><BankApp/></div>
          <div className='practical-container'><PracticalProgramm/></div>
          <div className='PreviousAndNext-container'><PreviousAndNext/></div>
          <div className='about-container'><AboutBazar/></div>
          <div className='footer-container'><Footer/></div>

        </div>

      </div>
    
  )
}


export default App

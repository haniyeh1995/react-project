import './Home.css'
import Programs from './Programs/Programs.jsx'
import Onlinepayment from './OnlinePayment/Onlinepayment.jsx'
import BankApp from './BankApp/BankApp.jsx'
import PracticalProgramm from './PracticalProgramm/PracticalProgramm.jsx'
import PreviousAndNext from './PreviousAndNext/PreviousAndNext.jsx'
import AboutBazar from './AboutBazar/AboutBazar.jsx'
import Footer from '../Footer/Footer.jsx'



function Home() {
  
  
  return (
    
      <div className='container'>
        <div className='main'>
          <div className='program-container'><Programs /></div>
          <div className='online-container'><Onlinepayment/></div>
          <div className='bank-container'><BankApp/></div>
          <div className='practical-container'><PracticalProgramm/></div>
          <div className='PreviousAndNext-container'><PreviousAndNext/></div>
          <div className='about-container'><AboutBazar/></div>
           <div className='footer-container'><Footer /></div>
        

        </div>

      </div>
    
  )
}


export default Home
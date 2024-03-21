import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import stripe from './assets/stripe.svg'
import facebook from './assets/facebook.svg'
import twitter from './assets/twitter.svg'
import youtube from './assets/youtube.svg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'


const App = () => {
  return (
  
    <div className="container">
      <footer className="footer">
        <div className="left">
          <div className='foot-title'>Contact</div>
          <a href='hello@paystack.com'>hello@paystack.com</a>
          <div className="icon-holder">
            <img src={facebook} className="social-icon" />
            <img src={twitter} className="social-icon" />
            <img src={instagram} className="social-icon" />
            <img src={linkedin} className="social-icon" />
            <img src={youtube} className="social-icon" />
          </div>
          <div className='paystack'>Paystack is a Stripe company</div>
          <img src={stripe} className="stripe" />
        </div>
        <div className="right">
          <div className="wrapper">
            <div className="holder">
              <div className="foot-title">Lagos</div>
              <div className="address">
                126 Joel Ogunnaike Street,
                Ikeja GRA, Ikeja,
                Lagos, Nigeria
              </div>
              <a className="number">+234 201 631 6160</a>
            </div>
            <div className="holder">
              <div className="foot-title">Accra</div>
              <div className="address">
                <div>AfricaWorks,</div>
                <div>35 Patrice Lumumba Road,</div>
                <div>Airport Residential Area,</div>
                <div>Accra, Ghana</div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="holder">
              <div className="foot-title">San Francisco</div>
              <div className="address">
                <div>354 Oyster Point Blvd.,</div>
                <div>South San Francisco,</div>
                <div>CA 94080</div>
                <div>United States</div>
              </div>
            </div>
            <div className="holder">
              <div className="foot-title">Dubai</div>
              <div className="address">
                <div>Office 215,</div>
                <div>Building 3,</div>
                <div>Dubai Internet City, Dubai,</div>
                <div>United Arab Emirates</div>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="holder">
              <div className="foot-title">Cape Town</div>
              <div className="address">
                <div>Wework (1st Floor),</div>
                <div>80 Strand Street,</div>
                <div>Cape Town City Centre,</div>
                <div>Cape Town, 8001,</div>
                <div>South Africa</div>
              </div>
            </div>
            <div className="holder">
              <div className="foot-title">Nairobi</div>
              <div className="address">
                <div>Ikigai Westlands,</div>
                <div>Peponi Road,</div>
                <div>Nairobi, Kenya</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


export default App

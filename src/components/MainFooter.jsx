import React from 'react'
import MasterCardImg  from '../image/Mastercard-logo.svg.png';
import VisaLogo from '../image/Visa_Inc._logo.svg.png';
import PaypalLogo from '../image/paypal-logo-png-transparent.png';
import AmericanExpress from '../image/American_Express_logo_(2018).svg.png';
function MainFooter() {
  return (
    <footer className='Main__Footer'>
            <img className='mastercard' src={MasterCardImg} alt="Master-Card Logo" />
            <img className='visa' src={VisaLogo} alt="Visa Logo" />
            <img className='paypal' src={PaypalLogo} alt="Paypal Logo" />
            <img className='american'  src={AmericanExpress} alt="American Express Logo" />
    </footer>
  )
}

export default MainFooter
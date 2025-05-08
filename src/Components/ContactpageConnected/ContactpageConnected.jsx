import React from 'react'
import ContactPage from '../ContactComponent/ContactUs/ContactPage'
import SecondPart from '../ContactComponent/Contactsecondpart/SecondPart'
import Thirdpart from '../ContactComponent/ContactThirdpart/Thirdpart'
import Fourthpart from '../ContactComponent/ContactFourthpart/Fourthpart'
import Fifthpart from '../ContactComponent/ContactFifthpart/Fifthpart'

export default function ContactpageConnected() {
  return (
    <div>
      <ContactPage/>
      <SecondPart />
      <Thirdpart/>
      <Fourthpart/>
      <Fifthpart/>
    </div>
  )
}

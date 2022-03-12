import React, { useState } from 'react';
import Accordion from './Accordion/Accordion'

function App() {

  const [accordion, setAccordion] = useState('Title')

  return <div className="App">
    <Accordion title='Title1' accordion={accordion} setAccordion={setAccordion} />
    <Accordion title='Title2' accordion={accordion} setAccordion={setAccordion} />
    <Accordion title='Title3' accordion={accordion} setAccordion={setAccordion} />
    <Accordion title='Title4' accordion={accordion} setAccordion={setAccordion} />
    <Accordion title='Title5' accordion={accordion} setAccordion={setAccordion} />
  </div>

}

export default App

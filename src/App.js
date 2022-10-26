import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import Accordion from './Accrodion/Accordion';

function App() {
  const [info, setInfo] = useState([]);

  const [active, setActive] = useState('')

  useEffect(() => {
    fetch('https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english')
      .then(response => response.json())
      .then(info => setInfo(info));
  }, [])
  return (
    <div className='background'>
      <div className='body'>
        <div className='faq'>
          <h4 className='faq-text'>FAQs</h4>
          <p className='faq-paragraph'>Can’t find the answer you’re looking for? Reach out to our <a target='_blank' className='link' href='#'>support</a> team</p>
        </div>
        <div className='more-info'>
          {info.map(item => {
            return <Accordion active={active} setActive={setActive} {...item} />
          })
          }
        </div>
      </div>
    </div>
  )
}

export default App;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landingpage from './landingpage'
import EducationInEgypt from './components/Past';
import Navbar from './components/navbar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Landingpage/>
    </>
  </StrictMode>,
)


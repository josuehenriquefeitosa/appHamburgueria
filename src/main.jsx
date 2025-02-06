import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routes from './routes'
import { GlobalStyles } from './styles/GlobalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles/>
    <Routes/>
  </StrictMode>
)

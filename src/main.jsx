import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Container, CssBaseline } from '@mui/material'

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById('root')).render(
  <>
    <CssBaseline />
    <Container sx={{
        width:"100%",
        backgroundColor:"#E7E8E6",
        minHeight:"100vh",
        display:"flex",
        flexDirection:"column",
        gap:"3px",
        padding:"5px",
        fontSize:"13px"
      }} disableGutters	
      maxWidth="sm"
      >
      <App />
    </Container>
  </>
)

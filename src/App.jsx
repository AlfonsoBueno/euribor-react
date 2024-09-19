import { Typography } from '@mui/material'
import './App.css'
import Grafica from './Components/Grafica'
import imgLogo from "./assets/logo.png"
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';

function App() {

  return (
    <>

      <header>
        <div className="logo">
          <img src={imgLogo} />
        </div>
        
      </header>
      
      <div className='cuerpo-principal'>
        <Typography variant='div' sx={{ fontSize: '14px',marginBottom:"8px" }}>
            A partir de los datos del Banco Central Europeo, puedes consultar el histórico de los valores del Euribor, desde el año 1.999 hasta la actualidad.

        </Typography>

        <Grafica />
        
        

        <Typography variant='div' sx={{ fontSize: '16px', marginTop: "14px", display: "flex", fontWeight: "bold", alignItems: "center" }}>
          <HelpOutlineSharpIcon sx={{ fontSize: '24px', marginRight: '4px', color: 'black' }} /> 
          ¿Qué es el Euribor?
        </Typography>
        <Typography variant='div' sx={{ fontSize: '14px', marginTop: "8px" }}>
        El Euribor (Euro Interbank Offered Rate) es el tipo de interés al que los principales bancos europeos se prestan dinero entre sí a corto plazo. Es un índice de referencia clave en la zona euro, ya que se utiliza para calcular el interés de muchos productos financieros, como hipotecas variables. Cuando el Euribor sube, los intereses de estos préstamos también tienden a aumentar, y cuando baja, los intereses disminuyen.
        </Typography>
      </div>

      <footer>
          <>Desarrollado por&nbsp;<a href='https://alfonsobueno.com/' target='_blank'>Alfonso Bueno Serrano</a></>
      </footer>
    </>
  )
}

export default App

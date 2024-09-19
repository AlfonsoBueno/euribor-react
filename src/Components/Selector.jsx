import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Selector({ ultimoAnyo, onAnyoChange }) {
  const [anyo, setAnyo] = useState("todos"); // Inicializa con "todos"
  const [anyosEuribor, setAnyosEuribor] = useState([]);

  useEffect(() => {
    const años = [];
    for (let i = ultimoAnyo; i >= 1999; i--) {
      años.push(i);
    }
    setAnyosEuribor(años);
  }, [ultimoAnyo]);

  useEffect(() => {
    onAnyoChange(anyo); // Notifica al padre cuando el componente se monta
  }, [anyo, onAnyoChange]);

  const handleChange = (event) => {
    const nuevoAnyo = event.target.value;
    setAnyo(nuevoAnyo);
    onAnyoChange(nuevoAnyo); // Llamar la función para informar al padre del cambio
  };

  return (
    <Box sx={{ minWidth: 120, m:3}}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label">Año</InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={anyo}
          label="Año"
          onChange={handleChange}
        >
          <MenuItem value="todos">Todos</MenuItem>
          {anyosEuribor.map((anyo) => (
            <MenuItem key={anyo} value={anyo}>
              {anyo}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import Selector from "./Selector";
import { Paper } from "@mui/material";

Chart.register(CategoryScale);

function Grafica() {
  const [grafica, setGrafica] = useState([]);
  const [graficaT, setGraficaT] = useState([]);
  const [anyoSeleccionado, setAnyoSeleccionado] = useState(null); // Estado para el año seleccionado

  function handleAnyoChange(nuevoAnyo) {
    // Aquí puedes filtrar los datos según el año que se seleccione en el hijo
    setAnyoSeleccionado(nuevoAnyo);
    const datosFiltrados = filtrarAnyo(nuevoAnyo); // Filtra según el año
    setGraficaT(datosFiltrados);
  }

  function filtrarAnyo(ano) {
    const filteredData = [
      grafica[0].filter((date) => date.includes(ano)), // Filtrar las fechas que contienen el año seleccionado
      grafica[1].filter((value, index) => grafica[0][index].includes(ano)) // Filtrar los valores correspondientes a esas fechas
    ];
    return filteredData;
  }

  useEffect(() => {
    const url =
      "https://data-api.ecb.europa.eu/service/data/FM/M.U2.EUR.RT.MM.EURIBOR1MD_.HSTA?detail=dataonly&format=jsondata";

    fetch(url)
      .then((response) => response.json())
      .then((valores) => {
        const timePeriods = valores.structure.dimensions.observation[0].values;
        const fechas = timePeriods.map((period) => {
          const [year, month] = period.id.split('-');
          const fecha = new Date(year, month - 1);
          return `${('0' + (fecha.getMonth() + 1)).slice(-2)}/${fecha.getFullYear()}`;
        });

        const datosbruto = valores.dataSets[0].series["0:0:0:0:0:0:0"].observations;
        const todosdatos = Object.keys(datosbruto).map((key) => datosbruto[key][0]);

        const fechasValidas = [];
        const datosValidos = [];

        todosdatos.forEach((dato, index) => {
          if (!isNaN(dato) && dato !== undefined) {
            fechasValidas.push(fechas[index]);
            datosValidos.push(dato);
          }
        });

        setGrafica([fechasValidas, datosValidos]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const chartOptions = {
    pointRadius: 2,
    plugins: {
      tooltip: {
        animation: false,
      },
      legend: {
          display: false,
      }
  },
    animation: {
      duration: 25, // Desactiva las animaciones
    }
  };

  return (
    <>
      <Paper sx={{p:1}}>
        {grafica.length > 0 ? (
          <>
            <Selector
              ultimoAnyo={grafica[0][grafica[0].length - 1].split("/")[1]}
              onAnyoChange={handleAnyoChange} // Pasamos la función al hijo
            />
            
            
            <Line
              
              options={chartOptions}
              data={{
                labels: anyoSeleccionado=="todos"?grafica[0]:graficaT[0],
                datasets: [
                  {
                    label: "Euribor",
                    data: anyoSeleccionado=="todos"?grafica[1]:graficaT[1],
                    backgroundColor: [
                      "#3d5f54"
                    ],
                    borderColor: "#3d5f54",
                    borderWidth: 2
                  }
                ]
              }}
            />
          </>
        ) : (
          <p>Cargando datos...</p>
        )}
    </Paper>
    </>
  );
}

export default Grafica;

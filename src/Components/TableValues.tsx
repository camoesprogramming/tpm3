import styled from "styled-components"
import { Data } from "../Pages/MainPage"

export default function TableValues({data}: {data: Data[] | null} ) {
  return (
    <TableContainer>
      <table>
        
        <thead>
          <tr>
            <th>Despesa</th>
            <th>Categoria</th>
            <th>Dia</th>
            <th>Valor (R$)</th>
          </tr>
        </thead>

        <tbody>
          {data && data.map((e: Data) => (
            <tr key={e.id}>
              <td>{e.descricao}</td>
              <td>{e.categoria}</td>
              <td>{e.dia}</td>
              <td>{e.valor}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </TableContainer>
  )
}

const TableContainer = styled.div`
  
  margin: auto;
  width: 90%;
  
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    border: none;
  }

  td, th {
    border: none;
    text-align: left;
    padding: 8px;
  }

  th {
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`
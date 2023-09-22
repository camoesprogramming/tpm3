import styled from "styled-components"

export default function TableValues() {
  return (
    <TableContainer>
      <table>
        <tr>
          <th>Despesa</th>
          <th>Categoria</th>
          <th>Dia</th>
          <th>Valor (R$)</th>
        </tr>
        
        <tr>
          <td>Despesa exemplo 1</td>
          <td>Categoria exemplo 1</td>
          <td>Dia exemplo 1</td>
          <td>Valor exemplo 1</td>
        </tr>

        <tr>
          <td>Despesa exemplo 2</td>
          <td>Categoria exemplo 2</td>
          <td>Dia exemplo 2</td>
          <td>Valor exemplo 2</td>
        </tr>
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
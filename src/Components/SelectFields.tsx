import styled from "styled-components"

export default function SelectFields() {
  return (
    <Container>
      <SelectBlock>
        <label htmlFor="ano">Ano</label>
        <select name="anos" id="anos">
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </SelectBlock>
      <SelectBlock>
        <label htmlFor="month">Mês</label>
        <select name="month" id="month">
          <option value="Janeiro">Janeiro</option>
          <option value="Fevereiro">Fevereiro</option>
          <option value="Março">Março</option>
          <option value="Abril">Abril</option>
          <option value="Maio">Maio</option>
          <option value="Junho">Junho</option>
          <option value="Julho">Julho</option>
          <option value="Agosto">Agosto</option>
          <option value="Setembro">Setembro</option>
          <option value="Outubro">Outubro</option>
          <option value="Novembro">Novembro</option>
          <option value="Dezembro">Dezembro</option>
        </select>
      </SelectBlock>
      
    </Container>
  )
}

const SelectBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  label {
    margin-left: 5px;
    margin-bottom: 5px;
  }
  select {
    border: none;
    border-bottom: 1px solid grey;
  }
`
const Container = styled.div`
  display: flex;
`


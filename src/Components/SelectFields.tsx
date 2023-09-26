import styled from "styled-components"
import { Months, Years } from "../Pages/MainPage";
import { ChangeEvent } from "react";

export default function SelectFields(
  {setSelectedYear, setSelectedMonth} : 
  {setSelectedYear: (selectedYear : Years | null) => void;
  setSelectedMonth: (selectedMonth : Months | null) => void}
  ) {
  

  function handleYearSelection(event: ChangeEvent<HTMLSelectElement>) {
    
   const year: Years | string = event.target.value;
   
   if (year === "2020" || year === "2021") {
    setSelectedYear(year)
   } else {
    setSelectedYear(null)
   }
  }

  function handleMonthSelection(event: ChangeEvent<HTMLSelectElement>) {
    const month: string = event.target.value;
    const monthToNumber: string | null = monthNameToNumber(month)
    setSelectedMonth(monthToNumber as Months);
  }
  
  function monthNameToNumber(monthName: string): string | null {
    switch (monthName.toLowerCase()) {
      case "janeiro":
        return "01";
      case "fevereiro":
        return "02";
      case "março":
        return "03";
      case "abril":
        return "04";
      case "maio":
        return "05";
      case "junho":
        return "06";
      case "julho":
        return "07";
      case "agosto":
        return "08";
      case "setembro":
        return "09";
      case "outubro":
        return "10";
      case "novembro":
        return "11";
      case "dezembro":
        return "12";
      default:
        return null; // Retorna null se o nome do mês não for reconhecido
    }
  }


  return (
    <Container>
      <SelectBlock>
        <label htmlFor="ano">Ano</label>
        <select name="anos" id="anos" onChange={handleYearSelection}>
          <option value = "">Selecione...</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </SelectBlock>
      <SelectBlock>
        <label htmlFor="month">Mês</label>
        <select name="month" id="month" onChange={handleMonthSelection}>
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


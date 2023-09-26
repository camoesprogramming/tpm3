import SelectFields from "./SelectFields";
import ValueField from "./ValueField";
import styled from "styled-components";
import { Months, Years } from "../Pages/MainPage";

export default function Header(
  {totalValue, setSelectedYear, setSelectedMonth} : 
  {totalValue: string | null; 
  setSelectedYear: (selectedYear : Years | null) => void;
  setSelectedMonth: (selectedMonth : Months | null) => void}
  ) {
  
  return (
    <Container>
      
      <SelectFields  
      setSelectedYear = {setSelectedYear}
      setSelectedMonth = {setSelectedMonth} /> 
      <ValueField totalValue = {totalValue} />
      
    </Container>
  )
}

const Container = styled.div`
  height: 80px;
  width: 90%;
  margin:auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`
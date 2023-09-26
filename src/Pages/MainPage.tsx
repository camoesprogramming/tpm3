import { useEffect, useState } from "react"
import Header from "../Components/Header"
import TableValues from "../Components/TableValues"
import axios from "axios"

export type Data = {
  categoria: string,
  descricao: string,
  dia: string,
  id: number,
  mes: string,
  valor: number
}

export type Years = "2020" | "2021"

export type Months = "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";


export default function MaingPage() {

  const [apiData, setApiData] = useState<null | Data[]>(null);
  const [totalValue, setTotalValue] = useState<string | null>(null)
  const [selectedYear, setSelectedYear] = useState< Years | null>(null)
  const [selectedMonth, setSelectedMonth] = useState<Months | null>("01")
  
  

  useEffect(() => {
    if (selectedYear && selectedMonth) {
      const promise = axios.get<Data[]>(`http://localhost:3001/despesas?mes=${selectedYear}-${selectedMonth}&_sort=dia
      `)
      console.log(`http://localhost:3001/despesas?mes=${selectedYear}-${selectedMonth}&_sort=dia
      `)

      promise.then((response) => {
        setApiData(response.data)
        setTotalValue(sumValues(response.data))
      })
      .catch(error => console.error("Erro com a requisição do backEnd", error))
      
      
    } else {
      const promise = axios.get<Data[]>("http://localhost:3001/despesas");
    
      promise.then((response) => {
        setApiData(response.data)
        setTotalValue(sumValues(response.data))
      })
      .catch(error => console.error("Erro com a requisição do backEnd", error))
    }

    
    

  }, [selectedYear, selectedMonth]) 

  function sumValues(array: Data[]):string {
    let sum = 0;
    array.forEach(e => sum += e.valor)
    return (sum.toFixed(2)).replace(/\./g, ',');
  }

  return (
    <>
      <Header 
      totalValue = {totalValue}
      setSelectedYear = {setSelectedYear}
      setSelectedMonth = {setSelectedMonth}
      />
      <TableValues  data = {apiData}/>
    </>
  )
}


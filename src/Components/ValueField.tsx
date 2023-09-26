import styled from "styled-components"

export default function ValueField({totalValue} : {totalValue: string | null}) {
  return (
    <Container>
    <h1>Despesa Total: <span>R$ {!totalValue ? "carregando..." : totalValue}</span></h1>
    </Container>
  )
}

const Container = styled.div `
  h1 {
    font-size: 20px;
  }

  span {
    font-weight: bold;
  }
`
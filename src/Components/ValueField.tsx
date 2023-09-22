import styled from "styled-components"

export default function ValueField() {
  return (
    <Container>
    <h1>Despesa Total: <span>R$ 8168,98</span></h1>
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
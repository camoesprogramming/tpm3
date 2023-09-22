import SelectFields from "./SelectFields";
import ValueField from "./ValueField";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <SelectFields />
      <ValueField />
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
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-row-gap: 30px;
  grid-template-columns: repeat(12, 1fr);
`;

export const Row = styled.div`
  grid-column: 2 / span 10;
`;

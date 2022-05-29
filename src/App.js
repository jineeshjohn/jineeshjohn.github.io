import "./styles.css";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 10px 0;
`;
export const GridCell = styled.div`
  text-align: left;
  &.separator {
    border-right: 1px solid #ccc;
  }
`;
export const Hr = styled.div`
  border-bottom: 1px solid #ccc;
`;
export default function App() {
  return (
    <div className="App">
      <Grid>
        <GridCell className="separator">
          <div>Fullstack Developer</div>
          <div>Sky - Zensar - contract</div>
          <div>June 2021 - November 2021</div>
        </GridCell>
        <GridCell>
          <ul>
            <li>
              Upgrade old aim portal to azure cloud to improve slow data
              transfer, customer support and user experience
            </li>
            <li>
              Used technologies React,TypeScript, Next.js, Headless react
              components, Azure
            </li>
            <li> Build role based access for users</li>
          </ul>
        </GridCell>
      </Grid>
      <Hr />
      <Grid>
        <GridCell className="separator">
          <div>Fullstack Developer</div>
          <div>Sky - Zensar - contract</div>
          <div>June 2021 - November 2021</div>
        </GridCell>
        <GridCell>
          <ul>
            <li>
              Upgrade old aim portal to azure cloud to improve slow data
              transfer, customer support and user experience
            </li>
            <li>
              Used technologies React,TypeScript, Next.js, Headless react
              components, Azure
            </li>
            <li> Build role based access for users</li>
          </ul>
        </GridCell>
      </Grid>
    </div>
  );
}

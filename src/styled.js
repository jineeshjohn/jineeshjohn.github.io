import styled from 'styled-components';

export const NameSection = styled.div`
  .label-name {
    color: #002878;
    font-size: 28px;
    letter-spacing: 8px;
    font-weight: bold;
  }

  .label-designation {
    color: #ff6e01;
    font-size: 16px;
    text-transform: uppercase;
  }

  .label-slogon {
    color: #17365d;
    font-size: 12px;
    font-style: italic;
    padding-top: 5px;
  }
`;

export const Header2 = styled.div`
  color: #dad7d7;
  font-size: 12pt;
  text-transform: uppercase;
  letter-spacing: 7px;
  font-weight: bold;
  font-style: italic;
  margin: 20px 0;
`;
export const TitleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const ContactsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const ContactsGridCell = styled.div`
  .row {
    display: grid;
    grid-template-columns: 100px 1fr;
    .cellValue {
      color: #17365d;
      font-style: italic;
      font-weight: 500;
      text-decoration: none;
    }
  }
`;
export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 2fr;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  ul {
    margin: 0;
  }
`;
export const SummaryGridCell = styled.div`
  text-align: left;
  &.separator {
    border-right: 1px solid #ccc;
  }
`;
export const Designation = styled.div`
  color: #17365d;
  font-size: 14px;
  font-weight: bold;
`;
export const Company = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #ff6e01;
`;
export const Duration = styled.div`
  display: inline-block;
  min-width: 10px;
  padding: 3px 8px;
  font-size: 12px;
  font-weight: normal;
  line-height: 1;
  color: #17365d;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border-radius: 5px;
  background: transparent;
  border: 1px solid #e2dfdf;
  font-style: italic;
`;
export const Logo = styled.img`
  border-radius: 50%;
`;
export const Tech = styled.span`
  border: 1px solid #f1eded;
  border-radius: 4px;
  padding: 3px 5px;
  display: inline-block;
  background: #${({ bg = 'b2becd' }) => bg};
  color: #${({ fg = '000' }) => fg};
  font-weight: 700;
  margin-right: 5px;
`;
export const TechItem = styled.em`
  margin-right: 5px;
  background: #f4f4f4;
  font-size: 11px;
  border-radius: 5px;
  padding: 3px;
`;

import styled from 'styled-components';

export const TransactionHistoryContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 600px;
`;

export const Table = styled.table`
  margin: 50px auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;

export const TableHead = styled.thead`
    font-size: 24px;
  text-align: center;
`;

export const TableRow = styled.tr`
  width: 33%;
  color: #8a8b8e;
  font-size: 32px;
  text-align: center;
  text-transform: capitalize;
  &:nth-child(even) {
background-color: #f2f2f2;
  }
`;

export const TableHeadItem = styled.th`
  text-align: left;
  padding: 10px;
`;

export const TableData = styled.td`
  text-align: left;
  padding: 10px;
`;
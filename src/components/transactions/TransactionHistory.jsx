import PropTypes from 'prop-types';
import { TransactionHistoryContainer, Table, TableHead, TableHeadItem, TableRow, TableData } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadItem>Type</TableHeadItem>
            <TableHeadItem>Amount</TableHeadItem>
            <TableHeadItem>Currency</TableHeadItem>
          </TableRow>
        </TableHead>
        <tbody>
          {items.map(item => (
            <TableRow key={item.id}>
              <TableData>{item.type}</TableData>
              <TableData>{item.amount}</TableData>
              <TableData>{item.currency}</TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TransactionHistoryContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
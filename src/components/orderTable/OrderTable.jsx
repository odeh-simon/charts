import React, { useState } from 'react';
import marcus from '../../assets/marcus.png'
import jaydon from '../../assets/jaydon.png'
import corey from '../../assets/corey.png'
import cooper from '../../assets/cooper.png'
import philip from '../../assets/philip.png'
import viewIcon from '../../assets/view-icon.svg'
import '../orderTable/OrderTable.css'


const OrderTable = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const tableData = [
    { userImage: marcus, name: 'marcus', date: 'Dec 12, 2023', amount: '$100000', status: 'Paid', invoice: 'View' },
    { userImage: jaydon, name: 'jaydon', date: 'Jan 14, 2024', amount: '$150000', status: 'Refund', invoice: 'view' },
    { userImage: corey,  name: 'correy', date:  'Jan 16, 2024', amount: '$110000', status: 'Paid', invoice: 'view' },
    { userImage: cooper, name: 'Cooper', date: 'Jan 19, 2024', amount: '$20000', status: 'Refund', invoice: 'view' },
    { userImage: philip, name: 'Phillip', date: 'Jan 26, 2024', amount: '$300000', status: 'Paid', invoice: 'view' },
    { userImage: corey, name:  'Correy', date: 'Jan 29, 2024', amount:  '$700000', status: 'Refund', invoice: 'view' },
    { userImage: jaydon, name: 'jaydon', date: 'Fab 02, 2024', amount: '$900000', status: 'Paid', invoice: 'view' },
    { userImage: marcus, name: 'Marcus', date: 'Fab 16, 2024', amount: '$440000', status: 'Refund', invoice: 'view' },
    { userImage: philip, name: 'jaydon', date: 'Fab 17, 2024', amount: '$20000', status: 'Paid', invoice: 'view' },
    { userImage: cooper, name: 'Cooper', date: 'Fab 26, 2024', amount: '$670000', status: 'Refund', invoice: 'view' },
   
  ];

  const visibleRows = showAll ? tableData : tableData.slice(0, 5);

  return (
    <div className="order-table">
      <div className="table-header">
        <h2>Last Orders</h2>
        <button onClick={toggleShowAll} className="see-all-link">
          {showAll ? 'See Less' : 'See All'}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((row, index) => (
            <tr key={index}>
              <td>
              <div className="user-info">
                  <img src={row.userImage} alt='user' className="user-image" />
                  <span>{row.name}</span>
                </div>
              </td>
              <td>{row.date}</td>
              <td>{row.amount}</td>
              <td className="status-cell" style={{ color: index % 2 === 0 ? '#34CAA5' : '#ED544E' }}>
                {row.status}
              </td>
              <td className="invoice-cell">
              <img src={viewIcon} alt="Download" className="download-icon" />{' '}
                {row.invoice}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;

import React from 'react';
import MyDoc from './MyDoc';
import { PDFDownloadLink } from '@react-pdf/renderer';

const TicketButton = () => (
  <PDFDownloadLink document={<MyDoc />} fileName="Ticket.pdf">
    {({ blob, url, loading, error }) => (loading ? 'Loading document...' : (
      <button>
        Get your Ticket
      </button>
    ))}
  </PDFDownloadLink>
);

export default TicketButton;